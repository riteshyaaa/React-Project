
import {CDN_URL} from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const ItemList = ({items}) => {
   
   const dispatch =useDispatch()
 const handleAdditem = (item) => {
   dispatch(addItem(item))

 }
     return (
         <div>
            {items.map((item) =>{
                return(
                 <div key={item.card.info.id} className=" border-gray-200 border-b-2 text-left flex "
                 >  
                 <div className="w-9/12">
                 <div
                  className= "font-bold  p-2"> 
                 <span >
                    {item.card.info.name} -{"₹"}
                    </span>
                 <span>
                    {(item.card.info.price)
                    ?item.card.info.price/100
                    :item.card.info.defaultPrice/100}
                    </span> 
                 </div>
                 <p 
                 className = " text-xs"> 
                 {item.card.info.description}
                 </p>

              </div>
             <div className = "w-3/12 p-4  ">
             <div className="absolute">
                <button className= " p-2 mx-16 bg-black text-white  shadow-lg rounded-lg" 
                onClick={() => handleAdditem(item)}>
                    Add+
                </button>
             </div>
                 <img src ={CDN_URL+ item?.card?.info?.imageId }/>
                 </div>
              </div>

                )
            })}
         </div>
     )
}
export default ItemList