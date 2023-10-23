import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Targeta from "../Tarjeta";
import { pedirItemPorMarca } from "./PedirItemMarca";

export const VerItemMarca =()=>{

    const [productos, setProductos] = useState([]);
    
    const marca1 = useParams().marca;    
   

    useEffect(()=>{   

       pedirItemPorMarca(marca1)
        .then((res)=>{
            setProductos(res)           
            
        })
       

    }, [marca1])
    
     
    
    return(
        <div className="container2">
          
           <Targeta valorSeleccionadoLista={productos} propiedad={"Biblioteca"}></Targeta>

        </div>
    )

}
