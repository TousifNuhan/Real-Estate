import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/faceIcon.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {

        logOut()
            .then()
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink className="mr-2" to="/">Home</NavLink></li>
        <li><NavLink className="mr-2" to="/updateProfile">Update Profile</NavLink></li>
        {
            user && <li><NavLink className="mr-2" to="/dashboard">Dashboard</NavLink></li>
        }
    </>
    return (
        <div className="mt-1 mb-6 ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="text-lg md:text-2xl font-semibold">EmerGent</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="tooltip tooltip-bottom mr-3 md:mr-5 rounded-full" data-tip={user ? user.displayName : 'UserName'}>
                        <button className="btn btn-circle">
                            {
                                user ? <img className="rounded-full btn btn-circle" src={user.photoURL} alt="Coming soon" /> :
                                    <img src={icon} alt="Coming soon" />
                            }

                        </button>

                    </div>

                    {
                        user ? <button className="btn btn-outline font-semibold" onClick={handleSignOut}>Sign Out</button> :
                            <Link to="/login" className="btn btn-outline font-semibold"><button>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;