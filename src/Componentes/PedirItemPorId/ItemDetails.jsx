
import { useState } from "react";
import { ContadorProdutos } from "../ComponentesContador/ComponenteContador";



export const ItemDetails =({itemEntregado})=>{
    
    //console.log(itemEntregado);

    const nuevoArreglo = [{...itemEntregado}];
    const [cantidad, setCantidad ] = useState(0);


    

    return(
        <div className="container1">

       {  nuevoArreglo.map((i)=> 
        <div className="card m-4 p-4">
         <img  className = "card" src={(i.foto)} alt={i.modelo}/>
        <h5>Id: {i.id}</h5>
        <h5>Marca: {i.marca}</h5>
        <h5>Modelo: {i.modelo}</h5>
        <h5>Precio: {i.precio}</h5>
        <h5>Cantidad: {i.cantidad}</h5>
        <h5>Agregar al carrito: {cantidad}</h5> 
        <ContadorProdutos arreglo ={itemEntregado} stock={10} cantidad={(c)=>{console.log("Cantidad Agregada" + c); setCantidad(c); }}/>
      
        
        </div>
        )
       }
       
      
     </div>


    )

}