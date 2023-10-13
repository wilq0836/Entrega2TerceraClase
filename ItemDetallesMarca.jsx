export const ItemDetailsMarca =({item})=>{

   
    return(
        <div>
       {  item.map((i)=> 
        <div className="container3">
        <h1>Id: {i.id}</h1>
        <h1>Marca: {i.marca}</h1>
        <h1>Modelo: {i.modelo}</h1>
        <h1>Precio: {i.precio}</h1>
        <p>Cantidad: {i.cantidad}</p>
        </div>
        )
       }
       
        </div>
    )

}