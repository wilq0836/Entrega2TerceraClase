import {  useState } from "react";


export const ContadorProdutos = ({stock,cantidad,arreglo})=>{

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
            <button className="btn btn-primary" onClick={()=>{disminuir()}} disabled={!numero} >-</button>
            <div className="cantidad">{numero}</div>
            <button className="btn btn-primary" onClick={()=>{aumentar()}} disabled={numero>=stock} >+</button>
            </div>
            <button id = "botonAgregar" className="btn btn-primary" onClick={()=>{
              cantidad(numero); console.log(arreglo);
               }} disabled={numero>stock || !numero}>Agregar al Carrito</button>

        </div>
    )
}