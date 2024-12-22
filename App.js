
import React from 'react';
import ReactDOM from "react-dom/client";

const Title =  () => 
   ( 
   <div className = "title">
   <a href="/">
      <img
      className = "logo"
       alt="React Logo"
       src={LOGO_URL}
       />
       </a>
</div>
      
    )












    const Footer = () => {
    return  (
        
    <div>
       <h3>Footer</h3> 

    </div>
    )}

const AppLayout = () => {
    return (
        
     <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
)}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);