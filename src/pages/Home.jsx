
import { Helmet } from 'react-helmet-async';
import Slider from './Home/Slider';
import SponserSlider from './Home/SponserSlider';
import CountThings from './Home/CountThings';
import Map from './Home/Map';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    EmerGent | Home
                </title>
            </Helmet>
            <Slider></Slider>
            <CountThings></CountThings>
            <Map></Map>
            <SponserSlider></SponserSlider>
        </div>
    );
};

export default Home;