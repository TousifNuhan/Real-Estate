import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
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