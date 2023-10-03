// import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import Item from "./components/ItemList/Item";


function App() {
  const greetingMessage = '¡Echa un vistazo a nuestros increíbles productos que tenemos para vos!';
  return ( 
  
  <main className="main">

<BrowserRouter>

    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={greetingMessage} />}/>
      <Route path="/item/:id" element={<ItemDetailContainer  />}/>
      <Route path="/productos" element={<ItemListContainer  />}/>
      <Route path="/productos/:categoria" element={<ItemListContainer />}/>
    
    </Routes>


    <Footer /> 
    </BrowserRouter>

  </main>
  
  );
 
}

export default App