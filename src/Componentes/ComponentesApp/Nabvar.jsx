import React from "react";
import { Link } from "react-router-dom";



function Navbar (){

    return(
        <div className="Navegador">
            <nav class="navbar" >
            
            <div className="dropdown">
               <ul><Link  className = "dropdown-item"  to='/'>Inicio</Link></ul>
               </div>
                <div className="dropdown">
                 <ul>  <Link className = "dropdown-item" to='/constructor'>Lista Productos Biblioteca</Link> </ul>
                 </div>

                 <div className="dropdown">
                   <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Productos</button>
                     <ul className="dropdown-menu dropdown-menu-dark">
                      <Link  className = "dropdown-item"  to='/VerItem/Categorias/scott' >Scott</Link>  
                       <li><Link  className = "dropdown-item"  to='/VerItem/Categorias/Trek'>Trek</Link></li>
                        <li><Link  className = "dropdown-item"  to='/VerItem/Categorias/Colnago'>Colnago</Link></li>
                         <li> <Link  className = "dropdown-item"  to='/VerItem/Categorias/Giant'>Giant</Link></li>
                       </ul>
                        </div>

                  <div className="dropdown">
                      <ul> <Link className = "dropdown-item" to='contenedorFetch'>Lista Productos Fetch</Link></ul>
                  </div>

                  <div className="dropdown">
                    <ul><Link className = "dropdown-item" to='/category/:categoryid'>Accesorios</Link></ul>
                  </div>

                  
                  <div>
                    <ul><Link className = "dropdown-item" to='/category/:categoryid'>Servicios</Link>        </ul>
                     </div>
               
                  <div className="dropdown">
                    <ul><Link className = "dropdown-item" to='/category/:categoryid'>Contacto</Link></ul>           
                      </div>

                  <div className="dropdown">
                    <ul><Link className = "botonCarrito1" type="button"  to='/Carrito'> <i className="bi bi-bag-check-fill">Carrito de compras</i></Link></ul>
                  </div>

             </nav> 
                
                  
        </div>
        
    )

}

export default Navbar;
