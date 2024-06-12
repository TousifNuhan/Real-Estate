import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'



const Login = () => {

    const { googleLogin, githubLogin, login } = useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation();

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        login(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            navigate(location?.state ? location.state : '/')

            Swal.fire({
                title: "Successfully Logged In!",
                // text: "You clicked the button!",
                icon: "success"
              });

        })
        .catch(()=>{
            Swal.fire({
                icon: "error",
                title: "You've enterred the wrong password",
                text: "Please Try Again!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              
        })
    }

    const googleSubmit = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const githubSubmit = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584279939954-f8c32f2581dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} className="relative w-full flex justify-center items-center min-h-screen rounded-2xl mt-3 mb-10 bg-center ">
                <div className="absolute bg-gray-600 inset-0 opacity-75"></div>
                <div className="relative bg-white py-10 rounded-3xl w-2/5 px-16">
                    <form onSubmit={handleLogin}>

                        <h1 className=" text-center text-gray-900 text-4xl font-semibold">Login Now!</h1>
                        <label >
                            <input type="email" name="email" placeholder="Email" className="focus:outline-none text-start w-full mt-14" required />
                            <hr className="mt-1 border-neutral-300" />
                        </label>
                        <label >
                            <input type="password" name="password" placeholder="Password" required className="focus:outline-none w-full mt-8" />
                        </label>
                        <hr className="mt-1 border-neutral-300" />
                        <div className="flex justify-center w-full ">
                            <button className="bg-black text-white p-2 rounded-3xl text-center w-2/4 mt-12 ">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center mt-6 mb-4">
                        < hr className="border border-neutral-600  w-full" />
                        <p className=" text-center w-full text-neutral-700">or Login with</p>
                        <hr className="border border-neutral-600  w-full" />
                    </div>
                    <div className="text-center mb-3">
                        <button onClick={googleSubmit} className="btn mr-3"><FaGoogle /></button>
                        <button onClick={githubSubmit} className="btn "><FaGithub /></button>
                    </div>
                    <p className="text-center font-medium">Don't have an account? Please <Link to="/register" className="text-black underline font-semibold">Register</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Login;