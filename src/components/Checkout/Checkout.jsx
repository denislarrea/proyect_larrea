import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/Config';
import './style.css'; 

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');

  const { carrito, precioTotal, vaciarCarrito, eliminarItem } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
      });
  };

  if (pedidoId) {
    return (
      <div className="checkout-container">
        <h1 className="checkout-title">¡Gracias por tu compra!</h1>
        <p>Tu número de pedido es: <span className="pedido-id">{pedidoId}</span></p>
      <p>Tu pedido está siendo preparado y será enviado pronto.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Finalizar La Compra</h1>
      <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register('nombre',{ required: true })} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register('email',{ required: true })} />
        <input type="tel" placeholder="Ingresá tu teléfono" {...register('telefono',{ required: true })} />
        <input type="text" placeholder="Ingresá la dirección" {...register('direccion',{ required: true })} />
        <button className="checkout-button" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;