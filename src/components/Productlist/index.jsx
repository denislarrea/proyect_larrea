import './style.css'

function Productlist({ greeting }){
    return  (  
        <div className="gret">
        <div className='gret-menssage'>
            {greeting && <p>{greeting}</p>}
         </div>

        <div className="listado">
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br />   
        <span>Detalle</span>     
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br /> 
        <span>Detalle</span>         
       </div>     
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br /> 
        <span>Detalle</span>         
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br /> 
        <span>Detalle</span>         
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br /> 
        <span>Detalle</span>         
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br />  
        <span>Detalle</span>        
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br /> 
        <span>Detalle</span>         
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br />    
        <span>Detalle</span>      
       </div>
       <div className="producto">
        <div className='img-product'><span>productos de mercado</span></div>
        <br /><span>Precio: $</span><br />  
        <span>Detalle</span>        
       </div>
       </div>

    </div>
    )
}

export default Productlist;