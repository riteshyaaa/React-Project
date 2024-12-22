const Body = () => {
    return (
        <div className = "body">
     {RestaurantList.restaurants.map((restaurant) => {
         return <RestaurantCard {...restaurant.info}  key= {restaurant.info.id} />
     })}
  </div>
    
 )};