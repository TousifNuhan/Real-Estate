import { IoMdCall, } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className=" h-4/5 relative bg-center " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className=" absolute inset-0 bg-gray-900 bg-opacity-75"> </div>
                    <div className="lg:flex ml-8 md:ml-0 py-1 md:py-0 justify-between text-white ">

                        {/* Left side */}
                        <div className=" relative my-16 md:ml-20 md:pt-10 lg:pt-0 lg:ml-24 w-full">
                            <h3 className="text-xl font-semibold ">Contact Us</h3>
                            <h2 className="text-4xl font-semibold my-5">Keep In Touch</h2>
                            <div className="flex items-center">
                                <p className="bg-white h-1 w-8 "></p>
                                <p className="bg-[#71b100]  h-1 w-8 "></p>
                            </div>
                            <p className="w-80 my-12 text-base font-medium">Emergent is a real state company which will help you to get the best platform according to your choice.We try to give the best out to our customers.</p>
                            <div className="leading-10 text-base font-semibold">
                                <div className="flex items-center">
                                    <IoMdCall className="text-[#71b100]  h-6 w-6"></IoMdCall>
                                    <h1 className="ml-4 md:ml-8">1-4556-4555-5654</h1>
                                </div>
                                <div className="flex items-center">
                                    <BiLogoGmail className="text-[#71b100]  h-6 w-6"></BiLogoGmail>
                                    <h1 className="ml-4 md:ml-8">22303358@iubat.edu</h1>
                                </div>
                                <div className="flex items-center">
                                    <FaRegClock className="text-[#71b100] h-6 w-6"></FaRegClock>
                                    <h1 className="ml-4 md:ml-8">Opening time is from, 10:00 am to 11:00 pm</h1>
                                </div>
                            </div>

                            <div className="flex items-center mt-8  w-72 bg-[#71b100]">
                                <p className="border-2 border-r-[#2a3a0e] border-t-0 border-l-0 border-b-0 p-2 px-5 bg-[#71b100] text-lg font-semibold">Take an Appointment</p>
                                <button> <RiCalendarScheduleFill className="ml-5 "></RiCalendarScheduleFill></button>
                            </div>

                        </div>

                        {/* Right side */}
                        <div className="relative pb-10 md:pb-14 lg:pb-0 lg:inline md:flex md:justify-end md:w-5/6 text-white lg:w-full lg:mt-32 md:mt-0 md:my-0 lg:my-16">
                            <div className="w-11/12 md:w-3/5 bg-[#71b100]">
                                <div className=" py-5">
                                    <div className=" ml-8 flex items-center">
                                        <p className="border-2 border-black h-8 "></p>
                                        <h1 className="ml-4 text-xl font-semibold">Office Address</h1>
                                    </div>
                                    <p className="ml-8 leading-7 w-64 mt-4 text-base font-medium">111, DIT Road, Malibagh, Dhaka (House # 27, Road #, Dhanmondi, Dhaka)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row md:justify-between bg-zinc-700 py-5">
                    <p className="text-base text-white mt-2 md:mt-0 mr-2 md:mr-0 ml-2 md:ml-5 lg:ml-10">@ Copyright 2017 All rights reserved - Designed by Tousif Nuhan</p>
                    <ul className="flex justify-center text-[#71b100]  md:mr-3 md:ml-2 lg:ml-0 lg:mr-10">
                        <li className="pr-3"><Link to="/">Home</Link></li>
                        <li className="border px-3 border-[#71b100] border-t-0 border-b-0"><Link>About us</Link></li>
                        <li className="px-3"><Link>Services</Link></li>
                        <li className="border px-3 border-[#71b100] border-r-0 border-t-0 border-b-0"><Link>Contact Us</Link></li>
                    </ul>
                </div>

            </footer>


        </div>
    );
};

export default Footer;

