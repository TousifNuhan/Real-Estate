
import { Helmet } from 'react-helmet-async';
import Slider from './Home/Slider';
import SponserSlider from './Home/SponserSlider';
import CountThings from './Home/CountThings';
import Map from './Home/Map';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import EstateSec from './Home/Estate/EstateSec';

const Home = () => {

    const [homeCards, setHomeCards] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setHomeCards(data))
    })

    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg "></span></div>
    }

    return (
        <div>
            <Helmet>
                <title>
                    EmerGent | Home
                </title>
            </Helmet>
            <Slider></Slider>

            <div className='my-20'>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <h1 className="text-4xl font-bold text-neutral-800">Properties For <span className='text-[#71b100]'>Sale</span> & <span className='text-[#71b100]'>Rent</span></h1>

                    <div className="flex items-center mt-5">
                        <p className="bg-black h-1 w-8 "></p>
                        <p className="bg-[#71b100]  h-1 w-8 my-3"></p>
                    </div>

                </div>
                <div className='grid grid-cols-3 gap-8 '>

                    {
                        homeCards.map(homeCard => <EstateSec
                            key={homeCard.id}
                            homeCards={homeCard}
                        ></EstateSec>)
                    }

                </div>
            </div>

            <CountThings></CountThings>
            <Map></Map>
            <SponserSlider></SponserSlider>
        </div>
    );
};

export default Home;