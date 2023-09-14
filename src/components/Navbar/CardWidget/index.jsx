import "./style.css"
import Card from "../../../assets/Iconos/Card.png"


   function CardWidget() {
    return (
      <div className="card">
        <img src={Card} alt="Carrito" className="card-img"/>
        <p className="card-text">5</p>
      </div>
    );
   }
  

export default CardWidget