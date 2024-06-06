import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import ErrorElement from "./ErrorElement";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateSec from "../pages/Home/Estate/EstateSec";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
               
            },
            {
                path:"/updateProfile",
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:"/userProfile",
                element:<UserProfile></UserProfile>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/estateSection",
                element:<EstateSec></EstateSec>
            }
        ]
    }
])

export default router