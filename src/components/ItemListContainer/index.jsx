import './style.css'
import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ( { greeting } ) => {

    const [productos, setProductos] = useState ([]);
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria;


    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria){
                    setProductos( res.filter((prod) => prod.categoria === categoria ));
                    setTitulo(categoria);
                } else {
                setProductos (res);
                setTitulo("Productos")
                }
    })

    }, [categoria])

    return (

        
        <div>
            <div className='gret-menssage'>
                <p >{greeting}</p>
            </div>
           
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer;