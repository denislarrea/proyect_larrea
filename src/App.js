// import './App.css'
import Navbar from "./components/Navbar"
import Productlist from "./components/ItemListContainer"
import Footer from "./components/Footer"


function App() {
  const greetingMessage = '¡Echa un vistazo a nuestros increíbles productos que tenemos para vos!';
  return ( 
  
  <main className="main">
    <Navbar />
    <Productlist greeting={greetingMessage} /> 
    <Footer /> 
   
  </main>
  
  );
 
}

export default App