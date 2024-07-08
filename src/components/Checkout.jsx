import React, { useContext, useState } from 'react'
import CartContext from '../contex/CartContext'
import useSweetAlert from '../hooks/useSweetAlert';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../firebase/config'

const Checkout = () => {
    
    const [pedidoId, setPedidoId] = useState('');
    const {carrito, CalcTotal, vaciarCarrito, actualizarCantidadProducto} = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    const { showSuccessAlert, showErrorAlert } = useSweetAlert();

    const comprar = async (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: CalcTotal()
        };
    
        const pedidosRef = collection(db, 'pedidos');
    
        try {
          const docRef = await addDoc(pedidosRef, pedido);
          setPedidoId(docRef.id);

          for (const producto of carrito) {
            const nuevaCantidad = producto.cantidad - producto.cantidad;
            await actualizarCantidadProducto(producto.id, nuevaCantidad);
          }
    
          vaciarCarrito([]);
          showSuccessAlert('Compra Exitosa', 'Gracias por su compra');
        } catch (error) {
          console.error('Error al procesar la compra: ', error); 
          showErrorAlert('Error', 'Hubo un problema al procesar la compra. Por favor, inténtelo nuevamente.');
        }
      };

      
    if (pedidoId) {
        return (
            <div className="checkout">
                <h1 className="checkout-titulo">Gracias por su compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className='checkout'>
      <h1 className='checkout-titulo'>Finalizar Compra</h1>
      <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='ingresa tu nombre' {...register('nombre')} />
        <input type="email" placeholder='ingresa tu e-mail' {...register('email')} />
        <input type="phone" placeholder='ingresa tu telefono' {...register('telefono')} />

        <button className='enviar' type='submit'>Comprar</button>
      </form>
    </div>
  )
}

export default Checkout
