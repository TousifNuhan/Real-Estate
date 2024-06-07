import { IoLocation } from "react-icons/io5";
import dollar from "../../../assets/dollar-sign-solid.svg"

const EstateSec = ({ homeCards }) => {

    console.log(homeCards)

    const { image, estate_title, description, segment_name, price, status, area, location, facilities } = homeCards


    return (
        <div className=" pt-3">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-52 rounded-2xl w-80" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">{estate_title}</h2>
                    <div className="flex items-center my-3">
                        <h1 className="text-black mr-5  text-xl font-bold">{segment_name}</h1>
                        <p className=" max-w-20 text-center py-1 px-1 bg-[#71b100] text-white">For {status}</p>
                    </div>
                    <p className="text-base font-medium text-neutral-600 mt-3 mb-2">{description}</p>
                    <div className="flex mb-1 text-neutral-500 font-medium">
                        <p className="">{facilities[0]}</p>
                        <p>{facilities[1]}</p>
                        <p>{facilities[2]}</p>

                    </div>
                    {/* < hr className="border border-neutral-600  w-full" /> */}
                    <div className="flex justify-center items-center">
                        <IoLocation className="text-xl mr-2 text-[#71b100]" />
                        <p className="text-base font-semibold ">{location}</p>
                    </div>
                    < hr className="border border-neutral-300 my-1 w-full" />

                    <div className="flex  text-base text-neutral-800 font-medium">

                        <p >{area}</p>
                        <div className="flex justify-center items-center">
                            <img className="h-4 w-4" src={dollar} alt="" />
                            <p className="text-end"> {price}</p>
                        </div>

                    </div>


                    <div className="card-actions justify-start mt-4">
                        <button className="text-white bg-[#71b100] px-4 py-3 rounded-lg hover:bg-white hover:text-black hover:border hover:border-[#71b100]">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateSec;