import { IoLocation } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { VscComment } from "react-icons/vsc";
import { MdDateRange } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import moment from 'moment-timezone';
import { TiTickOutline } from "react-icons/ti";

const EstateDetails = () => {

    const homeCard = useLoaderData()
    console.log(homeCard)

    const { id, image, estate_title, description, segment_name, price, status, area, location, facilities } = homeCard

    return (
        <div className="">
            <div className="hero min-h-72" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Property Details</h1>
                        <p className="mb-5"> <span><Link to="/" className="hover:text-gray-900">Home </Link><FaGreaterThan className="inline"></FaGreaterThan> Property Details</span></p>

                    </div>
                </div>
            </div>


            <div className="flex justify-between mt-20 ">
                <div>
                    <h1 className="card-title text-3xl font-medium ">{estate_title}</h1>
                    <div className="flex justify-center items-center my-3 text-lg">
                        <IoLocation className=" text-[#71b100]" />
                        <p className=" font-medium ">{location}</p>
                    </div>
                    <div className="flex">
                        <img className="h-6 w-8" src="https://thumbs.dreamstime.com/b/square-area-line-icon-room-dimension-sign-vector-square-area-line-icon-room-dimension-sign-territory-measurement-symbol-quality-272758508.jpg" alt="" />
                        <p className="text-base font-medium ">{area}</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center font-semibold">
                        < FaDollarSign className="text-[#71b100] text-3xl" />
                        <p className="text-3xl "> {price}</p>
                    </div>
                    <p className="text-lg max-w-16 text-center bg-[#71b100] text-white my-3">{status}</p>
                    <div className="flex">
                        <div className="flex justify-center items-center mr-2 ">
                            <MdDateRange className="mr-1 text-lg "></MdDateRange>
                            <p className="text-lg text-zinc-700">{moment().tz('Etc/GMT+1').format('MM-DD-YYYY ')}</p>
                        </div>
                        <div className="flex justify-center items-center mr-2">
                            <RxEyeOpen className="mr-1 text-lg "></RxEyeOpen>
                            <p className="text-lg text-zinc-700">4239</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <VscComment className="mr-1 text-lg "></VscComment>
                            <p className="text-lg text-zinc-700">64</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image */}

            <div className="flex justify-center my-12">
                <img className="w-4/5" src={image} alt="" />
            </div>

            {/* description */}

            <div className="flex justify-around">
                <div>
                    <h1 className="text-3xl font-semibold">Description :</h1>
                    <p className="text-lg font-medium w-80 ml-12 mt-2 leading-7 text-neutral-600">{description}</p>
                </div>

                {/* another details */}

                <div className="mb-12 ">
                    <h1 className="text-3xl font-semibold">Facilities :</h1>
                    <div className="mt-2">
                        <ul className="ml-12 text-lg font-medium text-neutral-600">
                            {facilities.map((e, index) => (
                                <div key={index} className="flex items-center mt-1">
                                    <TiTickOutline className="text-[#71b100] text-xl" />
                                    <p>{e}</p>
                                </div>

                            ))
                            }
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default EstateDetails;