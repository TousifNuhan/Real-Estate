import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";


const Root = () => {
    return (
        <div className="font-Rubik">
            <div className="w-11/12 mx-auto">
                <Header></Header>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;