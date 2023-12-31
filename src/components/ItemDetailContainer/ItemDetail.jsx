import './style.css'
//import { pedirItemPorId } from "../../helpers/pedirDatos";
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';


const ItemDetail = ( {item} ) => {

  const { carrito, agregarAlCarrito } = useContext (CartContext);
    console.log (carrito)
  const [cantidad,setCantidad] = useState (1)

  const handleRestar = () => {
    cantidad > 1 && setCantidad (cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad (cantidad + 1)
  }

 
  return (
    <div className="item-detail-container">
      <div className="producto-detalle">
        <img className="item-image" src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo-item">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoría: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleRestar={handleRestar}
            handleSumar={handleSumar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail