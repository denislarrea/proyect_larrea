import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { pedirItemPorId } from "../../helpers/pedirDatos";



const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState(null);
   

    useEffect(() => {
            pedirItemPorId(itemId)
        .then((res) => {
          setItem(res);
        })

    }, [itemId])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer