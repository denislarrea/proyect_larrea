import './style.css'
import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ( { greeting } ) => {

    const [productos, setProductos] = useState ([]);
   
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos (res);
            })

    }, [])

    return (

        
        <div>
            <div className='gret-menssage'>
                <p >{greeting}</p>
            </div>
           
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;