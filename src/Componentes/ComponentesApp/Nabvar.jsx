import React from "react";
import { Link } from "react-router-dom";



function Navbar (){

    return(
        <div className="Navegador">
            <nav className="navbar navbar-expand-lg" >

              <div className="dropdown">
               <lu ><a>Inicio</a>
               <Link className = "dropdown-item" to='/'>Inicio</Link> 
                 </lu>
                </div>

                 <div className="dropdown">
                  <lu>  <a>Lista Productos Biblioteca</a>                 
                  <Link className = "dropdown-item" to='/constructor'>Lista Productos Biblioteca</Link>
                   </lu>
                  </div>

                  <div className="dropdown">
                  <lu> <a>Productos</a>               
                  <Link className = "dropdown-item" to='/VerItem/Categorias/scott' >Scott</Link>
                  <Link className = "dropdown-item" to='/VerItem/Categorias/Trek'>Trek</Link>
                  <Link className = "dropdown-item" to='/VerItem/Categorias/Colnago'>Colnago</Link>
                  <Link className = "dropdown-item" to='/VerItem/Categorias/Giant'>Giant</Link>
                   </lu>
                  </div>

                  <div className="dropdown">
                    <lu> <a>Lista Productos Fetch</a>                
                     <Link className = "dropdown-item" to='contenedorFetch'>Lista Productos Fetch</Link>
                     </lu>
                  </div>

                  <div className="dropdown">
                    <lu> <a>Accesorios</a>             
                    <Link className = "dropdown-item" to='/category/:categoryid'>Accesorios</Link>
                     </lu>
                  </div>

                  <div className="dropdown">
                    <lu> <a>Portafolio</a>              
                    <Link className = "dropdown-item" to='/category/:categoryid'>Portafolio</Link>
                     </lu>
                  </div>
                  <div className="dropdown">
                    <lu> <a>Servicios</a>         
                    <Link className = "dropdown-item" to='/category/:categoryid'>Servicios</Link>
                     </lu>
                  </div>

                  <div className="dropdown">
                  <lu>  <a>Contacto</a>        
                  <Link className = "dropdown-item" to='/category/:categoryid'>Contacto</Link>
                     </lu>
                  </div>

              
                </nav>
                
            

           

        </div>
    )

}

export default Navbar;