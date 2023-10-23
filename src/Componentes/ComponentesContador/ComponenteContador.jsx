import {  useState } from "react";



export const ContadorProdutos = ({stock,cantidad,arreglo,AgregarCarrito})=>{
    

    const [numero, setNumero] = useState(1);

    const aumentar = ()=>{

        if(stock>numero){
        setNumero(numero+1);
        }
    }
    const disminuir =()=>{
        if(numero >= 1 )
        {
            setNumero(numero-1);
        }
        
    }

 
    
    return(
        <div className="container-fluid" >
            <div id="containerContador">
            <button className="btn btn-primary" onClick={()=>disminuir()} disabled={!numero} >-</button>
            <div className="cantidad">{numero}</div>
            <button className="btn btn-primary" onClick={()=>aumentar()} disabled={numero>=stock} >+</button>
            </div>
            <button id = "botonAgregar" className="btn btn-primary" onClick={()=>{ 
              AgregarCarrito(...arreglo,numero);  
              cantidad(numero);
              
             
              
             } } disabled={numero>stock || !numero}>Agregar al Carrito</button>

        </div>
    )
}






/*const ItemAgregado = {...arreglo, numero};
     
        const nuevoCarrito = [...carrito];
            

        const revisarSiCarrito = nuevoCarrito.find((producto)=> producto.id === ItemAgregado.id);

        if(revisarSiCarrito){
            console.log("Item Esta en el carrito");
            revisarSiCarrito.numero += numero;
            //setCarrito(nuevoCarrito);

            //setCarrito([arreglo, numero])


        } else{

            nuevoCarrito.push(ItemAgregado);
           // carrito.push({arreglo, numero});
            
        }
        
        setCarrito(nuevoCarrito);

        console.log(carrito);*/