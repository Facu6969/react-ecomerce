import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contex/CartContext';

const Cart = () => {
  
  const {carrito} = useContext(CartContext)

  return (
    <Link className="carrito" to="/Carrito">
      🛒 {carrito.length}
    </Link>
  );
}

export default Cart;
