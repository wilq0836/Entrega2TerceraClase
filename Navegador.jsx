import React from "react";
import ListaDesplegable from "./ListaDesplegable";



function Navegador (props){

    return (
        
            
            <nav className="">                                            
                    <ul>{props.texto} 
                       <ListaDesplegable  texto = {props.texto} ></ListaDesplegable>
                       </ul>

            </nav>

         
      
    )
}

export default Navegador;

/**/