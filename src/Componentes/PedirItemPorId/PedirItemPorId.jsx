import data from "../ConstructorArticulos/data.json"


export const pedirItemPorId = (id)=>{

    return new Promise((resolve,reject)=>{

        const item = data.find((e)=> e.id === id);
       
        if(item){
            resolve(item);
        }else{
            reject({
                Error:"No se encontro el item por id"
            })
        }
    })

   
}