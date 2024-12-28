
import React, { Suspense } from 'react';
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


 // lazy loading components
 // chunking
 // Dynamic loading
 // on Demand loading
const  Grocery = lazy(()=> { import("./components/Grocery")})
const AppLayout = () => {
    return (
        
     <div>
        <Header/>
        <Outlet/>
       
    </div>
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