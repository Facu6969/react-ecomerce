import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../contex/CartContext.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import useToasty from '../hooks/useToasty.jsx';

const Carrito = () => {
  const { carrito, CalcTotal, handleChangeCantidad, handleKeyDown } = useContext(CartContext);
  const [productosF, setProductosF] = useState([]);
  const { handleEliminarProducto } = useToasty();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosSnap = await getDocs(collection(db, 'productos'));
        const productosData = productosSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductosF(productosData);
      } catch (error) {
        console.error('Error al obtener los productos desde Firebase:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="carrito-container">
      <div className="productos-carrito">
        {carrito.length > 0 ? (
          carrito.map((producto) => {
            if (!producto) {
              return null;
            }
            const productoF = productosF.find(p => p.id === producto.id);
            if (!productoF) {
              return null; 
            }
            return (
              <div key={producto.id} className="producto-carrito">
                <img src={productoF?.imagen} alt={producto.nombre} className="imagen" />
                <div className="detalleProducto">
                <h1>{productoF.categorias?.nombre} {productoF.medida} {productoF.largo}: ${productoF.precio * producto.cantidad}</h1>
                  <div className="cantidad-eliminar">
                    <input
                      type="number"
                      value={producto.cantidad}
                      onChange={(e) => handleChangeCantidad(e, producto)}
                      onKeyDown={(e) => handleKeyDown(e, producto)}
                      className="inputCantidad"
                    />
                    <button onClick={() => handleEliminarProducto(producto.id, productosF)}>Eliminar</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>El carrito está vacío</p>
        )}
      </div>
      <div className="total-carrito">
        <h2>Total: ${CalcTotal()}</h2>
        <button>Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;
