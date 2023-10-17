import "./style.css"
import Card from "../../../assets/Iconos/Card.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


   function CardWidget() {
   
    const { cantidadEnCarrito } = useContext(CartContext)

    return (
      <div className="card">
        
        <Link to="/carrito">
        <img src={Card} alt="Carrito" className="card-img"/>
        <span className="card-text">{cantidadEnCarrito()}</span>
        </Link>
        
      </div>
    );
   }
  

export default CardWidget