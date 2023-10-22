// import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import Item from "./components/ItemList/Item";
import { CartProvider } from "./components/context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";



function App() {
  const greetingMessage = '¡Echa un vistazo a nuestros increíbles productos que tenemos para vos!';
 
  return ( 
    <main className="main">
<CartProvider>

<BrowserRouter>

    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={greetingMessage} />}/>
      <Route path="/item/:id" element={<ItemDetailContainer  />}/>
      <Route path="/productos" element={<ItemListContainer  />}/>
      <Route path="/productos/:categoria" element={<ItemListContainer />}/>
      <Route path="/carrito" element={<Carrito />}/>
      <Route path="/Checkout" element={<Checkout />}/>
    </Routes>


    <Footer /> 
    </BrowserRouter>
  </CartProvider>
  </main>
  
  );
 
}

export default App