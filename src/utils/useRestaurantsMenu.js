import {MENU_API} from "../utils/constants"
import react from "react"
 import {useEffect, useState} from "react"
const useRestaurantsMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null)
    //fetch data
    useEffect(() =>{
        FetchMenu();

    },[]);

    const FetchMenu = async() =>{
        const data  =await  fetch(MENU_API + resId);
        const json = await data.json();
         setresInfo(json.data);
    
}
return resInfo;
}
export default useRestaurantsMenu