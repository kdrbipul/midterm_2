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
import Exploring from "../Components/Services/ServicesDetails/Exploring/Exploring";
import ScubaDiving from "../Components/Services/ServicesDetails/ScubaDiving/ScubaDiving";
import Sandboarding from "../Components/Services/ServicesDetails/Sandboarding/Sandboarding";
import Paragliding from "../Components/Services/ServicesDetails/Paragliding/Paragliding";
import Canoeing from "../Components/Services/ServicesDetails/Canoeing/Canoeing";
import Canyoneering from "../Components/Services/ServicesDetails/Canyoneering/Canyoneering";
import CavingAndRock from "../Components/Services/ServicesDetails/CavingAndRock/CavingAndRock";
import ZipLining from "../Components/Services/ServicesDetails/ZipLining/ZipLining";
import Hiking from "../Components/Services/ServicesDetails/Hiking/Hiking";
import Geocaching from "../Components/Services/ServicesDetails/Geocaching/Geocaching";
import PrivetRoute from './PrivetRoute/PrivetRoute';
import Nothing from "../Nothing/Nothing";


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
            },
            {
                path:'/exploring',
                element:<Exploring />
            },
            {
                path:'/scubadiving',
                element:<ScubaDiving />
            },
            {
                path:'/sandboarding',
                element:<Sandboarding />
            },
            {
                path:'paragliding',
                element:<Paragliding />
            },
            {
                path:'/canoeing',
                element:<Canoeing />
            },
            {
                path:'/canyoneering',
                element:<Canyoneering />
            },
            {
                path:'/cavingandrock',
                element:<CavingAndRock />
            },
            {
                path:'/ziplining',
                element:<ZipLining />
            },
            {
                path:'/hiking',
                element:<Hiking />
            },
            {
                path:'/geocaching',
                element:<Geocaching />
            }
        ]
    },
    {
        path:'/*',
        element:<Nothing />
    }
])

export default router;