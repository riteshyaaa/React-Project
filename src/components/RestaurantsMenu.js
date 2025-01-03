import react from "react";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestauranstMenu =  () => {

         const {resId} = useParams()
         const resInfo = useRestaurantsMenu(resId)
         const[ showIndex, setShowIndex] = useState(0)
       
     if(resInfo == null)return <Shimmer/>
     const{ name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        
         const categories  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
            c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ))
        // console.log(categories)
        
        
    return (   

    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>  
       
         {categories.map((category, index)=> (
            <RestaurantCategory
             key = {category?.card?.card.title} 
            data= {category?.card?.card}
            showItems ={index === showIndex? true : false}
            setShowIndex ={() => setShowIndex(index)
            }

            />)
        )}
      </div>
    )
}
export default RestauranstMenu;