import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";



function ListaDesplegable (props){
  
  return(
               ListaItems(props)           
         )

}
export default ListaDesplegable;



function DesplegarItems (arreglo){
      
    
    const [selectOption, setSelectOption] = useState ("");
    

    const handleOption = (event) => {setSelectOption(event)};
    //console.log({selectOption});
   
    //console.log(valor.toString());
    
    
  
    return(
            <div>       
                <lu>
                  {arreglo.map((opcion)=>(<li onClick={()=>{handleOption(opcion.value)}}  className="" key={opcion.value} value={opcion.value} > 
                   <Link to='/constructor2'>{opcion.value}</Link> 
                 
                   </li>))}   
                    </lu>            
                     <h1>{selectOption}</h1>
                     
                  </div>  
               )  
    
}


function ListaItems({texto}){

    const  marcaBicicleta =[
      
        {value:"Scott"},
        {value:"Colnago"},
        {value:"Giant"},
        {value:"Pinarello"},
        {value:"Trek"}
       ];

       const componentes = [
        {value:"Marcos"},
        {value:"Grupos"},
        {value:"Ruedas"},
        {value:"Llantas"},
        {value:"Cadenas"}

       ];

       const servicios = [
        {value:"Acompañamiento"},
        {value:"Mejora"},
        {value:"Entrenamiento"},
        
       ];

        let arreglo = "";


       

       if (texto === "Bicicletas")
       {

        arreglo = marcaBicicleta;
        
        return(

            DesplegarItems(arreglo)
          
        );}

        if (texto === "Componentes")
        {
 
         arreglo = componentes;
         
         return(
 
             DesplegarItems(arreglo)
           
         );}

         if (texto === "Servicios")
         {
  
          arreglo = servicios;
          
          return(
  
              DesplegarItems(arreglo)
            
          );}

         else{
            return(  
            <div>
              <lu  className="dropdown-menu dropdown-menu-dark" >   
              <li className = "dropdown-item"></li> </lu>
            </div>
          );
        };



}


