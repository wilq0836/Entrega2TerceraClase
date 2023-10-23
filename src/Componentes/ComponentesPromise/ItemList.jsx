import React from "react";
import Targeta from "../Tarjeta";

const ItemList =({products})=>{

    return(
       <div>             
         <Targeta valorSeleccionadoLista = {products}></Targeta>
      </div>
      
    )

}
export default ItemList;

