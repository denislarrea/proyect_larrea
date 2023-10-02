// import './App.css'
import Navbar from "./components/Navbar"
import Productlist from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  const greetingMessage = '¡Echa un vistazo a nuestros increíbles productos que tenemos para vos!';
  return ( 
  
  <main className="main">
    <Navbar />
    <Productlist greeting={greetingMessage} /> 
    <ItemDetailContainer  itemId={2} />

    <Footer /> 
   
  </main>
  
  );
 
}

export default App