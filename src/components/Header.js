
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[loginLogout, setloginLogout] = useState("login") 
    const OnlineStatus = useOnlineStatus();
   return  (
 
   <div className = "header">
      <div className = "title">
   <a href="/">
      <img
      className = "logo" 
       alt="React Logo"
       src={LOGO_URL}
       />
       </a>
</div>
      <div className = "nav-items">
       <ul>
          <li> Online status:{OnlineStatus? "✅" : "🔴"} </li>
          <li> <Link to ="/">  Home</Link></li>
          <li> <Link to ="/about">About </Link></li>
          <li> <Link to ="/contact">Contact</Link></li>
          <li><Link to ="/cart">cart </Link></li>
          <li><Link to ="/Grocery">Grocery </Link></li>
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
