const RestaurantCategory =  ({data}) => {
    return (
        <div>
            {/* Header */}
            <div className = "w-6/12  mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <span className = "font-boldt "> {data.title}</span>
                <span>⬇️</span>
            </div>
           
            {/* Body of Restaurant in accordiom */}
        </div>
    )
}
export default  RestaurantCategory