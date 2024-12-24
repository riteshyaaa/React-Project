import React from 'react';
import RestaurantCard from  './RestaurantCard';
import RestaurantList from "../utils/mockData";
import {useState, useEffect} from 'react';
const Body = () => {
    
    let [listRestuarant, setlistRestuarant] = useState([]);
    console.log("Body")

    useEffect(() => {
       console.log("API Policy is not granted ")
      fetchData();
    },[]);

    const fetchData = async () =>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json = await data?.json()
 console.log(json);
 console.log(" After API call ")
 setlistRestuarant(json.data.cards);
 console.log(setlistRestuarant)
    
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
                           let filteredrestaurant = listRestuarant?.filter((restaurant) => restaurant?.avgRating > 4.5); 
                           setlistRestuarant(filteredrestaurant);
                           
                           
                         
                            console.log(" filterButton clicked")
                         }}> Top rated restaurants
                         </button>
                      </div>
          <div className = "restaurant-container"> 
     {listRestuarant?.map((restaurant) => {
         return <RestaurantCard {...restaurant.card.card}  key= {restaurant.id} />
     })}
     </div>
  </div>
    
 )};
 export default Body;
