import React, { useContext } from 'react';
import CartContext from '../contex/CartContext.jsx';
import productosData from '../data/productos.json';

const Carrito = () => {
  const { carrito, setCarrito, CalcTotal } = useContext(CartContext);

  const handleChangeCantidad = (event, producto) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
      const carritoActualizado = carrito.map(p =>
        p.id === producto.id
          ? { ...p, cantidad: nuevaCantidad }
          : p
      );
      setCarrito(carritoActualizado.filter(p => p.cantidad > 0));
    }
  };

  const handleKeyDown = (event, producto) => {
    if (event.key === 'Enter') {
      const nuevaCantidad = parseInt(event.target.value, 10);
      if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
        handleChangeCantidad(event, producto);
      }
    }
  };

  return (
    <div>
      {carrito.length > 0 ? (
        carrito.map((producto) => (
          <div key={producto.id} className="producto-carrito">
            <img src={productosData.find(p => p.id === producto.id).imagen} alt={producto.nombre} className="imagen" />
            <div className="detalleProducto">
              <h1>{producto.categoria.nombre} {producto.medida} {producto.largo}: ${producto.precio * producto.cantidad}</h1>
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
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
      <h2>Total: ${CalcTotal()}</h2>
    </div>
  );
};

export default Carrito;
