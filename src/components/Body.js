import React from 'react';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {    
    const [listRestuarant, setlistRestuarant] = useState([]);
    const [filterRes, setfilterRes] = useState([]);    
    const [searchtext, setsearchtext] = useState("");

   
    

    useEffect(() => {
       
      fetchData();
    },[]);
    const fetchData = async () =>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data?.json();

         const restaurant = json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

         if ( restaurant=== undefined ){
          restaurant =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
         }


        setlistRestuarant(restaurant);
        setfilterRes(restaurant);
    }
     const onlineStatus =  useOnlineStatus()
     if(onlineStatus === false) {
      return <h2> Loooks like you are offline!! Please check your internet connection </h2>
       }
 
    return  (listRestuarant.length === 0)? <Shimmer/> :  (
        <div className = "body">

         <div className = "filter flex ">
                <div className = "search m-4 p-4 flex items-center">

                   {/* we are binding the state variable with input text  but this doesn't work bcoz it won't change state variable
                     to make this happen we use onChange */}

            <input type = "text" className = "border border-solid border-black" placeholder = "search for restaurants" value = {searchtext} onChange = {(e) => {setsearchtext(e.target.value)
           
            
            }}/>           
                <button
                    className =  "px-2 bg-green-200 m-2 flex items-center rounded-lg"
                 onClick = {() => {
                     const filterData = listRestuarant.filter((restaurant) => {
                    return restaurant?.info?.name?.toLowerCase().includes(searchtext.toLowerCase())                   
                    })
                    setfilterRes(filterData);                   
                       }}> search
                       </button >
                   
                  
                         <button className ="filter-btn bg-gray-200 m-4 px-4 rounded-lg flex items-center"
                         onClick={()=>{
                           const filteredList = listRestuarant?.filter((restaurant) => restaurant?.info?.avgRating > 4.5); 
                          
                           setfilterRes(filteredList); 
                         }}> Top rated restaurants
                         </button>
                         </div >
                      </div>
          <div className = "res-container flex flex-wrap justify-center"> 
     {filterRes.map((restaurant) => (
         <Link 
         key= {restaurant.info.id}
         to = {"/restaurants/" + restaurant.info.id }>
         

           </Link> 
     ))}
     </div>
  </div>
    
 )};

 export default Body;
