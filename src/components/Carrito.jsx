import React, { useContext } from 'react';
import CartContext from '../contex/CartContext.jsx';
import productosData from '../data/productos.json';

const Carrito = () => {
  const { carrito, setCarrito, CalcTotal, handleChangeCantidad, handleKeyDown } = useContext(CartContext);

  

  return (
    <div className="carrito-container">
      <div className="productos-carrito">
        {carrito.length > 0 ? (
          carrito.map((producto) => (
            <div key={producto.id} className="producto-carrito">
              <img src={productosData.find(p => p.id === producto.id).imagen} alt={producto.nombre} className="imagen" />
              <div className="detalleProducto">
                <h1>{producto.categoria.nombre} {producto.medida} {producto.largo}: ${producto.precio * producto.cantidad}</h1>
                <div className="cantidad-eliminar">
                  <input
                    type="number"
                    value={producto.cantidad}
                    onChange={(e) => handleChangeCantidad(e, producto)}
                    onKeyDown={(e) => handleKeyDown(e, producto)}
                    className="inputCantidad"
                  />
                  <button onClick={() => setCarrito(carrito.filter(p => p.id !== producto.id))}>Eliminar</button>
                </div>
              </div>
            </div>
          ))
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
