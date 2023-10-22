import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import './style.css'
import { Link } from "react-router-dom"

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarItem} = useContext(CartContext)
const handleVaciar = ()=> {
    vaciarCarrito ()
}
   
  const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarItem } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }}

    return (
        <div className="carrito-container">
            <h1 className="carrito-title">Carrito de Compras</h1>

            {carrito.map((prod) => (
                <div className="producto-detalle" key={prod.id}>
                    <img src={prod.imagen} alt={prod.titulo} />
                    <div>
                        <h3 className="producto-titulo">{prod.titulo}</h3>
                        <p className="producto-precio">Precio unitario: ${prod.precio}</p>
                        <p className="producto-precio">Precio total: ${prod.precio * prod.cantidad}</p>
                        <p className="producto-cantidad">Cantidad: {prod.cantidad}</p>
                        <button className="producto-eliminar" onClick={() => eliminarItem(prod)}>X</button>
                    </div>
                </div>
            ))}

            {  
                carrito.length > 0 ?
                <>
                    <h2>Total a Pagar: ${precioTotal()}</h2>
                    <button className="carrito-vaciar" onClick={handleVaciar}>Vaciar Carrito</button>
                    <Link className="carrito-comprar" to="/checkout">Finalizar Compra</Link>
                </> :

        

                <h2>¡El carrito está vacío!</h2>
            }
        </div>
    );
}

export default Carrito