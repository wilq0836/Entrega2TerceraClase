import { Link} from "react-router-dom";
import { CarContext } from "./Context/CarContext";
import { useContext } from "react";






function Targeta ({valorSeleccionadoLista, propiedad}){


  const {AgregarCarrito} = useContext(CarContext);

  const imprimirTarjeta =(valor)=>{
    
   
    return( 

       
    <div className="container4">{
      
      valor.map((item) => 

      <div className="container" key = {item.id}>     
        <div  className = "card m-3 p-3" >  
              <img  className = "card-img-top" src={(item.foto)} alt={item.modelo}/>
          
            <div className="card-body" >     
                <h5>ID: {item.id} </h5>               
                <h5>Marca: {item.marca} </h5>
                <h5>Modelo: {item.modelo }</h5>
                <h5>Precio: {item.precio}</h5>
                <h5>Especificación: {item.cantidad}</h5>  
            </div>   
            <hr></hr>
              <button className="btn btn-primary" onClick={()=>AgregarCarrito(item, 1)}>Agregar Carrito</button>  
              <hr></hr>
               <Link className="btn btn-primary" to={'/Carrito'} >Ver Carrito</Link>  
               <hr></hr>
               {mostrarBoton(propiedad, item)}
               
               <hr></hr>  
                               
            </div>
            
            </div>  
   

    )}</div>
   
    )

  }
 
  
    
  return ( 
    imprimirTarjeta(valorSeleccionadoLista)
    
    )
       
} 
 export default Targeta;
      
           
const mostrarBoton = (propiedad, item)=>{

  if(propiedad === "Biblioteca"){
    return(

      <Link className="btn btn-primary" to={`/VerItem/${item.id}`}>Ver mas sobre este producto</Link>

    )

    }else{
      return(
     <Link className="btn btn-primary" to={`/VerItemFetch/${item.id}`}  >Ver mas sobre este producto Fetch</Link> 
      )
  }

}
         
  


 
      
  /* 

         carrito.forEach(
      
        (e) => {    
           
            
            let renglonesCar = document.createElement("tr");
              
                renglonesCar.innerHTML = `
                <td>${e.marca}</td>
                <td id = "cantidad-${e.modelo}">${e.modelo}</td>
                <td><input id="cantidad-producto-${e.modelo}" type="number" value="${e.cantidad}" min="1" max="100" step="1" style="width: 50px;"/></td>              
                <td>${e.precio}</td>         
                <td><button id="eliminar-${e.modelo}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                <td id = "total-${e.modelo}">${e.cantidad*e.precio}</td>    
            `;          
  
             elementoAgregado.append(renglonesCar);            
             
             let sumaProdu = document.getElementById(`cantidad-producto-${e.modelo}`);
             sumaProdu.addEventListener('click', () => {
             
             let valor = sumaProdu.value;
             e.cantidad = valor
             */