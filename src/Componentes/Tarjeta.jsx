
import { Link} from "react-router-dom";


const carrito = [];


function Targeta ({valorSeleccionadoLista}){


  //console.log(JSON.stringify(valorSeleccionadoLista)+ "Esta el la impresion desde Targeta")
  
  //ImprimirRenglonesCarrito1()


  const imprimirTarjeta =(valor)=>{

    
   
    return( 

       
    <div className="container1">{
      
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
           
              <button  onClick={()=>{

              //let encontrarProducto = carrito.includes(item);
              //const {id,marca,modelo,precio,especificacion,foto,cantidad} = item;
                new Carrito(item);
                carrito.push(item);
                console.log(carrito);
               
       
                     }} key={item.id}   className="btn btn-secondary">Agregar al Carrito</button> 

                <hr></hr>
               <Link className="btn btn-primary" to={'/Car'} >Ver Carrito</Link>  
               <hr></hr>
               <Link className="btn btn-primary" to={`/VerItem/${item.id}`}  >Ver mas sobre este producto</Link>                   
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
      
      class Carrito {
        constructor(id,marca, modelo, precio, especificacion, foto, cantidad) {
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.especificacion = especificacion;
            this.foto = foto;
            this.cantidad = cantidad;
         }}

 export const ImprimirRenglonesCarrito1 =()=> {


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

  
  };

 





 
      
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