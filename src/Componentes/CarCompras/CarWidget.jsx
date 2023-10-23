import React, { useContext, useEffect } from "react";
import { CarContext } from "../Context/CarContext";
import { useState } from "react";

const CarWidget =() =>{


  useEffect(()=>{
                                
  })

  
  const[numeroElemt, setNumeroElemt] = useState(1);
   
  const {carrito, aumentar, precioTotal, cantidadCarrito, eliminarArticulo, vaciarCarrito} = useContext(CarContext);

  const handleEliminar = (item)=>{
    
    eliminarArticulo(item);

  }

 return(

         
            
       
        <div className="renglonesCarrito2 " >                 
        <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
                      
                       </div>
                      
                          <div className="">
                             
  <table className="table">
    <thead>
    <tr>
       <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
           <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                     <th scope="col">Eliminar</th>
                     </tr>                                           
             </thead>
                  <tbody  id="items">

                  { carrito.map((item)=><tr key={ item.id}>                                               
                          <td >{item.marca}</td>
                            <td >{item.modelo}</td>
                               <td  ><input  id = {`cantidad-producto-${item.id}`}  key = {`cantidad-producto-${item.id}`}   type="number"  min="1" max="10"  onClick={(e)=>{
                               
                               e.preventDefault();
                               let cantidad = e.target.value;
                               setNumeroElemt(cantidad);
                               console.log(cantidad);
                               
                               aumentar(item)
                                 
                               }} /></td>
                                 <td >{item.precio}</td>
                                    <td >{item.precio * item.numero}</td> 
                                       <td ><button  id = {`eliminar-${item.modelo}`} key={`eliminar-${item.modelo}`} 
                                       
                                       onClick={()=>{ 
                                        handleEliminar(item)

                                         

                                        }} type="button" className="btn btn-danger" ><i className="bi bi-trash-fill"></i></button></td>
                                      
                                        </tr>
                                             
                                             )} 
                                </tbody>                                        
                            </table> 
                            <h4><th  >Total Compra: ${precioTotal()}</th> </h4>
                               <h4><th>Cantidad de articulos: {cantidadCarrito()}</th></h4>
                                          
                                                 
         
         <div className="modal-footer">
         <button type="button" className="btn btn-secondary">Cerrar</button>
         
         <button type="button" className="btn btn-outline-success me-2" >Terminar compra</button>
         <button type="button" className="btn btn-outline-success me-2" onClick={()=>vaciarCarrito()} >Vaciar Carrito</button>
         </div>
     </div>
     </div>      
       </div> 
       
     
     
     
         )
  

     

    
}


    


export default CarWidget;



