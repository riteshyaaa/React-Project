
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[loginLogout, setloginLogout] = useState("login") 
    const OnlineStatus = useOnlineStatus();
   return  (
 
   <div className = "flex justify-between shadow-md">
      <div className = "logo-container">
           <a href="/">
                 <img className = "w-20" 
                      alt="React Logo"
                      src={LOGO_URL}
                      />
                      </a>
         </div>
      <div className = "flex items-center">
       <ul className="flex p-4 m-4">
          <li className="px-4 flex items-center"> Online status:{OnlineStatus? "✅" : "🔴"} </li>
          <li className="px-4"> <Link to ="/">  Home</Link></li>
          <li className="px-4"> <Link to ="/about">About </Link></li>
          <li className="px-4" ><Link to ="/contact">Contact</Link></li>
          <li className="px-4"><Link to ="/cart">cart </Link></li>
          <li className="px-4"><Link to ="/Grocery">Grocery </Link></li>
          <button className = "login"
          onClick={() => {(loginLogout == "login")?
            setloginLogout("logout"):
            setloginLogout("login")  
          }
         
         } 
          >
          {loginLogout}
            </button>
       </ul>

      </div>
      
   </div>
   
  
    )  }
export default Header ;
