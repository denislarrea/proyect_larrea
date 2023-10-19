import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './style.css'
const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarItem} = useContext(CartContext)
const handleVaciar = ()=> {
    vaciarCarrito ()
}
   
  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div className="producto-detalle"  key={prod.id}>
                    <img  src={prod.imagen} alt={prod.titulo} />
                    <div>
                    <h3 className="titulo">{prod.titulo}</h3>
                    <p className="precio-carrito">Precio unit: ${prod.precio}</p>
                    <p className="precio-carrito">Precio total: ${prod.precio * prod.cantidad}</p>
                    <p className="precio-carrito">Cant: {prod.cantidad}</p>
                    <button onClick={() => eliminarItem(prod)}>X</button>
                    </div>
                </div>
            ))

        }

{  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
               
            </> :
            <h2>El carrito está vacío :(</h2>
        }

    </div>
  )
}

export default Carrito