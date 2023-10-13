import React from "react";

function Etiquetas (){

 
    return(
        
        <div className="cards"> 
         
         <div   type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
     Toggle width collapse< img  className="imagen-cards" src={require("../img/imag3.jpg")} alt="imagen"></img></div>
         <div >
             <div className="collapse" id="collapseWidthExample">
                 <div className="card card-body" >
       This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
             </div>
          </div>
        </div>
        {  React.createElement("div",{ className :"go"}, "Ejemplo insertando un div como en js")}
    

 
        </div>
       

      
    );

}
export default Etiquetas;