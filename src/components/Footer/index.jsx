import './style.css'
import ubicacion from "../../assets/Iconos/ubicacion.png"
import redes from "../../assets/Iconos/redes.png"


function Footer() {
    return (
      <div className="footer">
        <div className='foo-left'>
          <span>Contacto directo con el proveedor</span><br />
          <span>denis_larrea@hotmail.com</span><br />
          <span>Córdoba, Argentina.</span>
        </div>
  
        <div className='foo-right'>
          <span>Nuestro Local</span> <br />
          <img src={ubicacion} alt="ubicacion" className='icono-img' /><br />
          <span>Jacinto Rios 3215, Córdoba-Argentina</span>
        </div>
  
        <div className='foo-center'>
          <span>Seguinos en nuestras Redes Sociales</span> <br />
          <img src={redes} alt="redes sociales" className='social-img' />
        </div>
      </div>
    );
  }
  
  export default Footer;





