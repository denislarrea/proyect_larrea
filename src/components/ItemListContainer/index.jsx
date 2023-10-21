import './style.css'
//import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/Config"

const ItemListContainer = ( { greeting } ) => {

    const [productos, setProductos] = useState ([]);
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria;


    useEffect(() => {

        const productosRef = collection(db, "Productos")

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) :productosRef

        getDocs(q)
        .then((resp) =>{

            setProductos(
                resp.docs.map((doc) => {
                    return{...doc.data(), id: doc.id }
                })
            )

        })

    }, [categoria])
 
// Para que me traiga el nombre de la categoria

    useEffect(() => {
        if (categoria) {
            setTitulo(categoria);
        } else {
            setTitulo("Productos");
        }
    }, [categoria]);

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