import React from "react";
import Navegador from "./Navegador";

function Nav () {

    return(
        
         <div  className="Navegador">
         <Navegador   texto={"Inicio"} ></Navegador>    
         <Navegador   texto={"Bicicletas"} ></Navegador>
         <Navegador   texto={"Componentes"}></Navegador>
         <Navegador   texto={"Accesorios"}></Navegador>
         <Navegador   texto={"Portafolio"}></Navegador>
         <Navegador   texto={"Servicios"}></Navegador>
         <Navegador   texto={"Contacto"}></Navegador>
        
        </div> 
    
    )

}
export default Nav;