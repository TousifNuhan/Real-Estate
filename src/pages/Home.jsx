
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

            <div className='grid grid-cols-3 gap-4 auto-rows-auto'>

                {
                    homeCards.map(homeCard => <EstateSec
                        key={homeCard.id}
                        homeCards={homeCard}
                    ></EstateSec>)
                }

            </div>

            <CountThings></CountThings>
            <Map></Map>
            <SponserSlider></SponserSlider>
        </div>
    );
};

export default Home;