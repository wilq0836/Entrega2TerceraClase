import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "./PedirItemPorId";
import { ItemDetails } from "./ItemDetails";

export const VerItem = ()=>{

    const [item, setItem] = useState(null);
    const id = useParams().id;
       

    useEffect(()=>{
        
        pedirItemPorId(Number(id))
        .then((res)=>{
            setItem(res);           
            
        })
    },[id])

    return(
        <div className="container3">
            
            <ItemDetails  itemEntregado = {item}></ItemDetails>
        </div>
    )
}



