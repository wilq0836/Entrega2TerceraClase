import { createContext, useEffect } from "react";
import { useState } from "react";

export const CarContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito"))|| [];

export const CartProvaider = ({children})=>{

    const [carrito, setCarrito]= useState([carritoInicial]);
   
    const[numeroElemt, setNumeroElemt] = useState(1);

  const AgregarCarrito =(item,numero)=>{
    
        
    const ItemAgregado = {...item,numero}; 
            
    carrito.push(ItemAgregado);
    console.log(ItemAgregado);
    //const nuevoCarrito=[...carrito];

    

   /*
    const revisarSiCarrito =  carrito.find((producto)=> producto.id === ItemAgregado.id);
    
    if(revisarSiCarrito){
       
        console.log("Producto esta")
        revisarSiCarrito.numero += numero;
        setCarrito(nuevoCarrito);        
       
    }else{
       
        nuevoCarrito.push(ItemAgregado);
        console.log("Producto NO esta")       
    }
     
    setCarrito(nuevoCarrito);

   */

    //localStorage.setItem();

  
  
}

const cantidadCarrito = ()=>{
  
  return carrito.reduce((acc, prod)=> acc + prod.numero, 0);
}
const precioTotal = ()=>{
  return carrito.reduce((acc, prod) => acc + prod.precio * prod.numero, 0);
}

const eliminarArticulo =(item)=>{

  let posicion = carrito.indexOf(item); 
   carrito.splice(posicion,1);
   const newcarrito = [...carrito];
   setCarrito(newcarrito); 

 
console.log(carrito)
}

const vaciarCarrito = ()=>{
    setCarrito([]);
}

useEffect(()=>{

    localStorage.setItem("carrito", JSON.stringify(carrito));

},[carrito])


const aumentar =(item)=>{

  console.log(item);

  //let posicion = carrito.indexOf(item); 
  //carrito.numero = (item);

}

return(

<CarContext.Provider value={{  carrito,aumentar, AgregarCarrito, cantidadCarrito, precioTotal, eliminarArticulo, vaciarCarrito}}>
    {children}
</CarContext.Provider>


)

}
