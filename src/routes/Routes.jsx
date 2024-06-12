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
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
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
                element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute> ,
                loader: estateLoader

            }
        ]
    }
])

export default router