import { Link } from "react-router-dom";


function Car (){

    return(
        <div  className="Carrito" >   
            <button   id="toggleMyModal" type="button" className ="botonCarrito"  > <Link to={'/Car'}>Carrito de compras</Link>  <i className="bi bi-bag-check-fill"></i></button>
              
              
</div>
              
              
       
)}


export default Car;