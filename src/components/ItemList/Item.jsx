
import "./style.css"

const Item = ( {producto}) => {

    return (

        <div >
          

            <div className="producto">
            <img className="img-product" src={producto.imagen} alt="" />
                <h4>{producto.titulo}</h4>
                <p>Precio: $ {producto.precio}</p>
                <p>Categoria:{producto.categoria}</p>
                <a className="ver-mas" href={`/item/${producto.id}`}>Ver Más</a>

            </div>

        </div>
    
    )
      
  
    }

    export default Item
