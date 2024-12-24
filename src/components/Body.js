import React from 'react';
import RestaurantCard from  './RestaurantCard';
import RestaurantList from "../utils/mockData";
import {useState, useEffect} from 'react';
const Body = () => {
    
    let [listRestuarant, setlistRestuarant] = useState([]);
    console.log("Body")

    useEffect(() => {
       
      fetchData();
    },[]);

    const fetchData = async () =>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data?.json()
 console.log(json);
      
 setlistRestuarant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
    
    }
   
    console.log("Bodies")
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
                           let filteredrestaurant = listRestuarant?.filter((restaurant) => restaurant?.info?.avgRating > 4.5); 
                           setlistRestuarant(filteredrestaurant);
                           
                           
                         
                            console.log(" filterButton clicked")
                         }}> Top rated restaurants
                         </button>
                      </div>
          <div className = "restaurant-container"> 
     {listRestuarant?.map((restaurant) => {
         return <RestaurantCard {...restaurant.info}  key= {restaurant.id} />
     })}
     </div>
  </div>
    
 )};
 export default Body;
