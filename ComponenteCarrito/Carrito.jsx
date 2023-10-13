import React from "react";
import { ImprimirRenglonesCarrito1 } from "../Tarjeta";
import { Link, Route, Router } from "react-router-dom";


function BotonCarrito (){
    
    return(

        <div  className="Carrito" >   
            <button  
             id="toggleMyModal" type="button" className ="botonCarrito" data-bs-toggle="modal" data-bs-target="#exampleModal" >Carrito de compras <i className="bi bi-bag-check-fill"></i></button>
                     
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
                            
                            </div>
                            <div className="container-fluid">
                                <div className="container">
                                
                                 
                                
   
                                 </div> 
                                   <tfoot>
                                     <tr id="footer">
                                                <th scope="row" >Total Compra: </th>
                                                <th  id = "total-compra" scope="row" >Carrito vacío</th>
                                            </tr>
                                        </tfoot> 
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Cerrar</button>
          <button type="button" className="btn btn-outline-success me-2"  data-bs-dismiss="modal" >Terminar compra</button>
          </div>
      </div>
  </div>
</div>


          </div>   

    )
 
 };

 export default BotonCarrito;


 


 





 /*




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

                                           
                                               {
                                                j.map((item)=><tr key={ item.modelo}>
                                                <td >{item.marca}</td>
                                                <td >{item.modelo}</td>
                                                <td ><input key = {item.id}   type="number"  min="1" max="100" /></td>
                                                <td >{item.precio}</td>
                                                <td  id = {item.modelo}>{item.precio}</td> 
                                                <td ><button key={item.modelo} type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i></button></td>
                                                <td ></td>
                                                </tr>)
                                                } 

                                        </tbody>
                                       
                                        <tfoot>
                                            <tr id="footer">
                                                <th scope="row" >Total Compra: </th>
                                                <th  id = "total-compra" scope="row" >Carrito vacío</th>
                                            </tr>
                                        </tfoot>
                                    </table>
        
    
   )*/