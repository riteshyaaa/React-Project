import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) =>{
    return (
        <>
        <div className = "res-card m-4 p-4 w-[220px] h-[350px] bg-gray-200 hover:bg-gray-300 rounded-lg flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img className = "rounded-lg w-full h-[150px] object-cover"
            src = {CDN_URL+ cloudinaryImageId}/>  
        <h2 className = "font-bold py-2 text-lg truncate">{name} </h2>
        <h4 className = "cuisines">{cuisines.join(", ")}</h4>
        <h4 className = "ml-2 text-gray-700 font-semibold">{avgRating}stars</h4>
        </div>
        </> 
    )
};


// Higher Order Component 
// imput - RestauuratnCard ==> RestaurantCardpromoted

//  export const withPromotedLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div className = "promoted-label">
//                 <label>Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }
export default RestaurantCard;