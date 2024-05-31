import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import ErrorElement from "./ErrorElement";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/updateProfile",
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:"/userProfile",
                element:<UserProfile></UserProfile>
            }
        ]
    }
])

export default router