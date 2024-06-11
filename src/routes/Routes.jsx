import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import ErrorElement from "./ErrorElement";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateSec from "../pages/Home/Estate/EstateSec";
import EstateDetails from "../pages/Home/Estate/EstateDetails";


const estateLoader=async ({params}) => {
        const res=await fetch('/categories.json');
        const data=await res.json();
        const estate= data.find(e=>e.id === parseInt(params.id))
    
        return estate;
    }

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/estateSection",
                element: <EstateSec></EstateSec>
            },
            {
                path: "/homeCard/:id",
                element: <EstateDetails></EstateDetails>,
                loader: estateLoader

            }
        ]
    }
])

export default router