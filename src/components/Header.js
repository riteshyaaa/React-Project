import {LOGO_URL} from "../utils/constants";
const Header = () => 
    (
   <>    
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
       </ul>

      </div>
      
   </div>
   </>
);
export default Header ;
