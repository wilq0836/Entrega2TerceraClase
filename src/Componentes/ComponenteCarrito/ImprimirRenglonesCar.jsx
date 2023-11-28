import { useEffect } from "react";
import { useState,useParams } from "react";
import { pedirItemPorId } from "../PedirItemPorId/PedirItemPorId";

export const ImprimirRenglones = ()=>{ 
  
   
   const [carrito,setCarrito] = useState([]);

   const valor = useParams().id;

   useEffect(()=>{
     pedirItemPorId(Number(valor))
    .then((res)=>{
        setCarrito(res);
        
    })

   },[valor])

   


    return(


        <div className="renglonesCarrito" >    
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
                                <td  >{item.marca}</td>
                                  <td >{item.modelo}</td>
                                     <td  ><input  id = {`cantidad-producto-${item.id}`}  key = {`cantidad-producto-${item.id}`}   type="number"  min="1" max="100"  /></td>
                                       <td >{item.precio}</td>
                                          <td  id = {item.modelo} >{item.precio}</td> 
                                             <td ><button  id = {`eliminar-${item.modelo}`} key={`eliminar-${item.modelo}`} onClick={()=>{ 

                                               let posicion = carrito.indexOf(item); 
  
                                               carrito.splice(posicion,1);  
                                               console.log({carrito});
 
                                               }} type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i></button></td>
                                            
                                         </tr>
                                              
                                              )
                                         } 
                                 </tbody>                                        
                             </table> 
                 </div>
                
    )
}