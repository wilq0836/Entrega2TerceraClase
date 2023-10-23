import React from "react";
import { useEffect, useState } from "react";
import getProducts from "./ObtenerProductos";
import ItemList from "./ItemList";


const ItemLisContainer=({greeting})=>{
    
    

    const[products, setproducts] = useState([]);

    useEffect(()=>{
        getProducts()
        .then(response =>{
            setproducts(response)
        })
        .catch( error=> {console.error(error)
        })
       
        
    },[])

    return(
        <div className="ListFetch">
            <h1 className="ObtenerValor">{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    )

}
export default ItemLisContainer;