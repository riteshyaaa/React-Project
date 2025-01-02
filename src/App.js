
import React, { Suspense,useState,useEffect } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { lazy } from 'react';
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from './components/Cart';
import  RestaurantsMenu from "./components/RestaurantsMenu"
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



 // lazy loading components
 // chunking
 // Dynamic loading
 // on Demand loading
const  Grocery = lazy(()=> { import("./components/Grocery")})

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "Ritesh Yadav",
      };
      setUserName(data.name);
    }, []);
  
    return (
        <Provider store = {appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
     <div>
        <Header/>
        <Outlet/>
       
    </div>
    </UserContext.Provider>
    </Provider>
)}

    // defines configuration
   const appRouter= createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
             {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        } ,
        {
            path: "/cart",
            element: <Cart/>
        },
        {
            path: "/Grocery",
            element: <Suspense fallback =  {<h1>Loading... </h1> }> 
                Grocery</Suspense>
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantsMenu/> 
        }


        ],
        errorElement:<Error/>
    },
   
   ])







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);