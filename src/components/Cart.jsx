import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  return (
    <Link className="carrito" to="/Carrito">
      🛒 {props.num}
    </Link>
  );
}

export default Cart;
