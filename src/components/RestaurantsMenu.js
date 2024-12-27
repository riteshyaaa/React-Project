import react from "react";
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants"

const RestauranstMenu =  () => {

     const[resInfo, setresInfo] = useState(null)
         const {resId} = useParams()
       
             
    useEffect(() =>{
        FetchMenu();

    },[])

    const FetchMenu = async() =>{
        const data  =await  fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json.data);
        setresInfo(json.data);


    }
     if(resInfo == null)return <Shimmer/>

     const{ name,cuisines,costForTwoMessage} = resInfo.cards[2].card.card.info;

        const{itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        
    return (
        <div>
           <h2>{name}</h2>
            <h4>
                {cuisines.join(", ")}
            </h4>
            <h4>{costForTwoMessage}</h4>
            <h2>Menu</h2>
            
            <ul>
                {itemCards.map((res) =>(
                    <li key ={res.card.info.id} >
                    {res.card.info.name}-{"Rs "}
                    {res.card.info.price/100}
                    </li>)
            )}
                
               
            </ul>
        </div>
    )
}
export default RestauranstMenu;