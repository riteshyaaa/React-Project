import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) =>{
    return (
        <>
        <div className = "res-card">
            <img className = "res-images"
            src = {CDN_URL+ cloudinaryImageId}/>  
        <h2 >{name} </h2>
        <h4 className = "cuisines">{cuisines}</h4>
        <h4>{avgRating}stars</h4>
        </div>
        </> 
    )
};
export default RestaurantCard;