import React from "react";
import Targeta from "../Tarjeta";

const ItemList =({products})=>{

    return(
       <div className="container1">             
         <Targeta valorSeleccionadoLista = {products}></Targeta>
      </div>
      
    )

}
export default ItemList;

/*products.map(prop => <Item key={prop.id}{...prop}></Item>)*/