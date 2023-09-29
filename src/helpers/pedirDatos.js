import data from "../assets/Data/listado.json"

export const pedirDatos = () => {

    return new Promise ((resolve,reject) => {
        setTimeout( () =>{
            resolve(data);
        },1000)
    })
}