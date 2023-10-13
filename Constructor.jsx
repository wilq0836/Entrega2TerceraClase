import React from "react";
import Tarjeta from "../Tarjeta";



function ConstructorProductos({valorSeleccionadoLista, titulo}){

    const valorSel = [];
    
    class Bicicleta {
        constructor (marca , modelo, precio, especificacion,foto,cantidad) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.especificacion = especificacion;
            this.foto = foto;
            this.cantidad = cantidad;       
                 
        };

    };

    const productosScott = [
        {id:14,marca:"scott",modelo:"addict1",precio:12000000,especificacion:"Nueva",foto:require("../img/454.jpg"),cantidad:1},
        {id:15,marca:"scott",modelo:"addict2",precio:10000000,especificacion:"Nueva",foto:require("../img/4542.jpg"),cantidad:1},
        {id:16,marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:require("../img/4546.jpg"),cantidad:1},
        {id:17,marca:"scott",modelo:"addictRc2",precio:10000000,especificacion:"Nueva",foto:require("../img/4547.jpg"),cantidad:1}
    
    ];
    
    
    const productosGiant = [
        {id:10, marca:"Giant",modelo:"advance",precio:12000000,especificacion:"Nueva",foto:require("../img/giantadvance.jpg"),cantidad:1},
        {id:11,marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"Nueva",foto:require("../img/gianttcrpro.jpg"),cantidad:1},
        {id:12,marca:"Giant",modelo:"propel",precio:10000000,especificacion:"Nueva",foto:require("../img/propeladvance.jpg"),cantidad:1},
        {id:13,marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"Nueva",foto:require("../img/propelgray.jpg"),cantidad:1}
    
    ];
    const productosTrek = [
        {id:6,marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),cantidad:1},
        {id:7,marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),cantidad:1},
        {id:8,marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"Nueva",foto:require("../img/TREKMADONEBLUE.JPG"),cantidad:1},
        {id:9,marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"Nueva",foto:require("../img/TREKSUPERCALIBER.JPG"),cantidad:1}
        
    ];
    
    const productosColnago = [
        {id:3,marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),cantidad:1},
        {id:4,marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),cantidad:1},
        {id:5,marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"Nueva",foto:require("../img/colnagovr3s.jpg"),cantidad:1},    
        
    ];
    
    const productosPinarello = [
        {id:0,marca:"Pinarello",modelo:"f12",precio:21000000,especificacion:"nueva",foto:require("../img/pinarello.jpg"),cantidad:1},
        {id:1,marca:"Pinarello",modelo:"f10",precio:22000000,especificacion:"nueva",foto:require("../img/pinarello10.jpg"),cantidad:1},
        {id:2,marca:"Pinarello",modelo:"contrareloj",precio:23000000,especificacion:"nueva",foto:require("../img/pinarellocontrareloj.jpg"),cantidad:1},    
        
    ];


    const todos = [
        {id:0,marca:"Pinarello",modelo:"f12",precio:21000000,especificacion:"nueva",foto:require("../img/pinarello.jpg"),cantidad:1},
        {id:1,marca:"Pinarello",modelo:"f10",precio:22000000,especificacion:"nueva",foto:require("../img/pinarello10.jpg"),cantidad:1},
        {id:2,marca:"Pinarello",modelo:"contrareloj",precio:23000000,especificacion:"nueva",foto:require("../img/pinarellocontrareloj.jpg"),cantidad:1},    
        {id:3,marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),cantidad:1},
        {id:4,marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),cantidad:1},
        {id:5,marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"Nueva",foto:require("../img/colnagovr3s.jpg"),cantidad:1},    
        {id:6,marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),cantidad:1},
        {id:7,marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),cantidad:1},
        {id:8,marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"Nueva",foto:require("../img/TREKMADONEBLUE.JPG"),cantidad:1},
        {id:9,marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"Nueva",foto:require("../img/TREKSUPERCALIBER.JPG"),cantidad:1},
        {id:10, marca:"Giant",modelo:"advance",precio:12000000,especificacion:"Nueva",foto:require("../img/giantadvance.jpg"),cantidad:1},
        {id:11,marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"Nueva",foto:require("../img/gianttcrpro.jpg"),cantidad:1},
        {id:12,marca:"Giant",modelo:"propel",precio:10000000,especificacion:"Nueva",foto:require("../img/propeladvance.jpg"),cantidad:1},
        {id:13,marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"Nueva",foto:require("../img/propelgray.jpg"),cantidad:1},
        {id:14,marca:"scott",modelo:"addict1",precio:12000000,especificacion:"Nueva",foto:require("../img/454.jpg"),cantidad:1},
        {id:15,marca:"scott",modelo:"addict2",precio:10000000,especificacion:"Nueva",foto:require("../img/4542.jpg"),cantidad:1},
        {id:16,marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:require("../img/4546.jpg"),cantidad:1},
        {id:17,marca:"scott",modelo:"addictRc2",precio:10000000,especificacion:"Nueva",foto:require("../img/4547.jpg"),cantidad:1}
    
    ]


    evaluarValor(valorSeleccionadoLista)


    function evaluarValor (valorSeleccionadoLista){  
    


        if(valorSeleccionadoLista ==="todos"){
            
            todos.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }   
        
    
        if(valorSeleccionadoLista ==="Scott"){
            
            productosScott.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }   
        
        if( valorSeleccionadoLista ==="Giant"){
    
            productosGiant.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }
        if(valorSeleccionadoLista ==="Colnago"){
    
            productosColnago.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }
    
        if(valorSeleccionadoLista ==="Pinarello"){
    
            productosPinarello.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }
        if(valorSeleccionadoLista ==="Trek"){
    
            productosTrek.forEach((item)=> {
            new Bicicleta (item)
            valorSel.push(item);  });
        }      
    
    }


    
    
    return(

        <div>

        <h1 className="ObtenerValor">{titulo}</h1>    
       
       <Tarjeta valorSeleccionadoLista={valorSel}></Tarjeta>
       
        
        </div>
                
    )



}export default ConstructorProductos;
