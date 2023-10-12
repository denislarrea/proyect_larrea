import './style.css'
import { pedirItemPorId } from "../../helpers/pedirDatos";
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ( {item} ) => {

  

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo-item">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {item.categoria}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail