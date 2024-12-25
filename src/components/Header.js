import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const[loginLogout, setloginLogout] = useState("login") 


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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
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
