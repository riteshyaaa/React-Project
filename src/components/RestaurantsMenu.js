import react from "react";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestauranstMenu =  () => {

         const {resId} = useParams()
         const resInfo = useRestaurantsMenu(resId)
        
   
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
                    {(res.card.info.price/100)||(res.card.info.defaultPrice/100)}
                    </li>)
            )}
                
               
            </ul>
        </div>
    )
}
export default RestauranstMenu;