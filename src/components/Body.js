
import RestaurantCard from  './RestaurantCard';
import RestaurantList from "../utils/mockData";
import {useState} from 'react';
const Body = () => {
    const[RestaurantList, setRestaurantList] = useState([
        {
          "name": "The Italian Bistro",
          "cuisine": "Italian",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "id": "9",
          "rating": 4.5,
          "location": "123 Main Street, New York, NY"
        },
        {
          "name": "Sushi Paradise",
          "cuisine": "Japanese",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/4f1ba845-4c45-48da-8d01-8902f7f8483e_683064.jpg",
          "id": "8",
          "rating": 4.7,
          "location": "456 Elm Street, San Francisco, CA"
        },
        {
          "name": "Spice Symphony",
          "cuisine": "Indian",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/953faded-a1ae-4066-9824-3ecd82211039_233329.jpg",
          "id": "7",
          "rating": 3,
          "location": "789 Pine Avenue, Chicago, IL"
        },
        {
          "name": "The Green Table",
          "cuisine": "Vegan",
          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
          "id": "6",
          "rating": 4.6,
          "location": "321 Oak Lane, Portland, OR"
        },
        {
          "name": "Steakhouse Supreme",
          "cuisine": "American",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/8b2db334-567e-45d0-9416-a4129239caec_645478.JPG",
          "id": "5",
          "rating": 2,
          "location": "987 Walnut Drive, Austin, TX"
        },
          {
            "name": "The Italian Bistro",
            "cuisine": "Italian",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "id": "9",
            "rating": 4.5,
            "location": "123 Main Street, New York, NY"
          },
          {
            "name": "Sushi Paradise",
            "cuisine": "Japanese",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/4f1ba845-4c45-48da-8d01-8902f7f8483e_683064.jpg",
            "id": "8",
            "rating": 4.7,
            "location": "456 Elm Street, San Francisco, CA"
          },
          {
            "name": "Spice Symphony",
            "cuisine": "Indian",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/953faded-a1ae-4066-9824-3ecd82211039_233329.jpg",
            "id": "7",
            "rating": 3,
            "location": "789 Pine Avenue, Chicago, IL"
          },
          
      ]
      );
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
                           const filteredrestaurant = RestaurantList.filter((restaurant) => restaurant.rating > 4); 
                            setRestaurantList(filteredrestaurant);
                         }}> Top rated restaurants
                         </button>
                      </div>
          <div className = "restaurant-container"> 
     {RestaurantList.map((restaurant) => {
         return <RestaurantCard {...restaurant}  key= {restaurant.id} />
     })}
     </div>
  </div>
    
 )};
 export default Body;
