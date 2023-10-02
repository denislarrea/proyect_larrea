
import { Link } from "react-router-dom"
import "./style.css"

const Item = ( {producto}) => {

    return (

        <div >
          

            <div className="producto">
            <img className="img-product" src={producto.imagen} alt="" />
                <h4>{producto.titulo}</h4>
                <p>Precio: $ {producto.precio}</p>
                <p>Categoria:{producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Más</Link>

            </div>

        </div>
    
    )
      
  
    }

    export default Item
