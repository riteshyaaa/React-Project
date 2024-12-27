import React from 'react';
import RestaurantCard from  './RestaurantCard';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom"
const Body = () => {
    
    const [listRestuarant, setlistRestuarant] = useState([]);
    const [filterRes, setfilterRes] = useState([]);
    
    const [searchtext, setsearchtext] = useState("");
    

    useEffect(() => {
       
      fetchData();
    },[]);

    const fetchData = async () =>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data?.json()
 
 setlistRestuarant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setfilterRes(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

 
    }


    return  (listRestuarant.length === 0)? <Shimmer/> :  (
        <div className = "body">

               <div className = "filter">
                <div className = "search-container">
            <input type = "text" className = "search-box" placeholder = "search for restaurants" value = {searchtext} onChange = {(e) => {setsearchtext(e.target.value)
           
            
            }}/>
                <button onClick = {() => {
                     const filterData = listRestuarant.filter((restaurant) => {
                    return restaurant?.info?.name?.toLowerCase().includes(searchtext.toLowerCase()) 
                   
                    })
                    setfilterRes(filterData);
                    
                }}> search
                     </button>
                     </div>
                         <button className ="filter-btn"
                         onClick={()=>{
                           const filteredList = listRestuarant?.filter((restaurant) => restaurant?.info?.avgRating > 4.5); 
                          
                           setfilterRes(filteredList); 
                         }}> Top rated restaurants
                         </button>
                      </div>
          <div className = "restaurant-container"> 
     {filterRes.map((restaurant) => (
         <Link 
         key= {restaurant.info.id}
         to = {"/restaurants/" + restaurant.info.id }> <RestaurantCard {...restaurant.info}  /></Link> 
     ))}
     </div>
  </div>
    
 )};
 export default Body;
