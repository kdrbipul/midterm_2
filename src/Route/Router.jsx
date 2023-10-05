import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import Service from './../Components/Services/Service';
import Mservice from './../Components/Mservice/Mservice';
import Project from "../Components/Project/Project";
import SignIn from "../UserLogin/SignIn/SignIn";
import Contact from "../Components/Contact/Contact";
import SignUp from "../UserLogin/SignUp/SignUp";
import Card from './../Card/Card';
import AboutDetails from "../AboutDetails/AboutDetails";
import Cycling from './../Components/Services/ServicesDetails/Cycling/Cycling';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/service',
                element:<Service />
            },
            {
                path:'/mservice',
                element:<Mservice />
            },
            {
                path:'/project',
                element:<Project />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/signin',
                element:<SignIn />
            },
            {
                path:'/signup',
                element:<SignUp />
            },
            {
                path:'/card',
                element:<Card />
            },
            {
                path:'/aboutMeDetails',
                element:<AboutDetails />
            },
            {
                path:'/cycling',
                element:<Cycling />
            }
        ]
    }
])

export default router;