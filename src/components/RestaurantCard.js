const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) =>{
    return (
        <>
        <div className = "restaurant-card">
            <img src = {CDN_URL+ cloudinaryImageId}/>  
        <h2 >{name} </h2>
        <h4 className = "cuisines">{cuisines.join(",")}</h4>
        <h4>{avgRating}stars</h4>
        </div>
        </>
    )
};
export default RestaurantCard;