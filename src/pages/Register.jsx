import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Register = () => {


    const { signUps } = useContext(AuthContext)
    const navigate = useNavigate();
    const [showpass, setShowPass] = useState(false)

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const photoUrl = form.get('photoUrl')
        const name = form.get('name')
        console.log(email, password, name)


        if (password.length < 6) {
            toast.error("You've to give more than 6 characters", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("You've to give atleast One uppercase letter", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        else if (!/[a-z]/.test(password)) {
            toast.error("You've to give atleast One lowercase letter", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        signUps(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
                Swal.fire({
                    title: "You've Successfully Registered!",
                    // text: "You clicked the button!",
                    icon: "success"
                });
                updateProfile(result.currentUser, {
                    photoURL: photoUrl,
                    displayName: name,

                })
                    .then(() => console.log('photo'))
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div >
            <Helmet>
                <title>
                    EmerGent | Register
                </title>
            </Helmet>
            <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1660119681754-db33b6ce5383?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} className="p-10 w-full flex justify-center items-center md:h-4/5 lg:min-h-screen rounded-2xl mt-3 mb-10 bg-center relative">
                <div className="absolute bg-gray-400 inset-0 opacity-75"></div>
                <div className="relative bg-white py-10 rounded-3xl md:w-3/5 w-11/12 lg:w-2/5 px-8 md:px-20 lg:px-16">
                    <form onSubmit={handleRegister}>
                        <h1 className=" text-center text-gray-900 text-2xl font-semibold">Register Now!</h1>
                        <label >
                            <input type="text" name="name" placeholder="Name" className="focus:outline-none text-start w-full mt-12" required />
                            <hr className="mt-1 border-neutral-300" />
                        </label>
                        <label >
                            <input type="email" name="email" placeholder="Email" className="focus:outline-none text-start w-full mt-10" required />
                            <hr className="mt-1 border-neutral-300" />
                        </label>
                        <label >
                            <input type="url" name="photoUrl" placeholder="PhotoURL" className="focus:outline-none text-start w-full mt-10" required />
                            <hr className="mt-1 border-neutral-300" />
                        </label>
                        <label className="flex">
                            <input type={showpass ? "text" : "password"} name="password" placeholder="Password" required className="focus:outline-none w-full mt-10 " />

                            <span onClick={() => setShowPass(!showpass)} className="relative top-11 text-xl">{showpass ? <IoEyeOff /> : <IoEye />}</span>

                        </label>
                        <hr className="mt-1 border-neutral-300" />
                        <div className="flex justify-center w-full ">
                            <button className="bg-black text-white p-2 rounded-3xl text-center w-2/4 mt-12 ">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-medium mt-6 md:mt-3">Already have an account?  <Link to="/login" className="text-black underline font-semibold">Login</Link></p>
                    <div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
                        />
                        {/* Same as */}
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;

