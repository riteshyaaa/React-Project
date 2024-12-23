
import RestaurantCard from  './RestaurantCard';
import RestaurantList from "../utils/mockData";
const Body = () => {
    return (
        <div className = "body">
            
           
     {RestaurantList.restaurants.map((restaurant) => {
         return <RestaurantCard {...restaurant.info}  key= {restaurant.info.id} />
     })}
     
  </div>
    
 )};
 export default Body;
