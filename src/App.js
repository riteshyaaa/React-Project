
import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from './components/Cart';
import  RestaurantsMenu from "./components/RestaurantsMenu"
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";



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
            path: "/restaurants/:resId",
            element: <RestaurantsMenu/>
        }


        ],
        errorElement:<Error/>
    },
   
   ])







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);