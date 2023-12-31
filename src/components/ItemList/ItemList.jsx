import Item from "../ItemList/Item"
import "./style.css"

const ItemList = ( {productos, titulo} ) => {

   // console.log(productos);
    return (
        <div>
            <h2 className="titulo">{titulo}</h2>

                <div className="listado">
                    { productos.map ((prod) => <Item producto={prod} key={prod.id}/>) }
                </div>

        </div>
    )
}

export default ItemList