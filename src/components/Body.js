
import RestaurantCard from  './RestaurantCard';
import RestaurantList from "../utils/mockData";
const Body = () => {
    return (
        <div className = "body">
            <div className= "search" >
            <input type = "text" placeholder = "search for restaurants"/>
                <button > search
                     </button>
                      </div>
                      <div className = "filter">
                         <button className ="filter-btn"
                         onClick={()=>{
                            RestaurantList = RestaurantList.restaurants.filter((restaurant) => restaurant.info.avgRating > 4); 
                            console.log("yes you did it"); 
                         }}> Top rated restaurants
                         </button>
                      </div>
          <div className = "restaurant-container"> 
     {RestaurantList.restaurants.map((restaurant) => {
         return <RestaurantCard {...restaurant.info}  key= {restaurant.info.id} />
     })}
     </div>
  </div>
    
 )};
 export default Body;
