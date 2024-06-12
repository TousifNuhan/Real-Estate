import Marquee from "react-fast-marquee";

const SponserSlider = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800">Our Partners</h1>
            <p className="text-base font-medium text-neutral-600 md:w-2/3 lg:w-2/5 mt-3">At Emergent real estate company,we work with other companies to get the best out of our work.</p>

            <Marquee pauseOnHover={true} speed={40} className="mt-3 mb-5">
                <div className="max-h-96 mb-5 flex justify-center">
                    <img className="h-64 mr-5" src="https://marketplace.canva.com/EAFegMagbOg/1/0/1600w/canva-gold-modern-corporate-round-luxury-real-estate-logo-CSP1sL3K9x0.jpg" alt="" />
                    <img className="h-64 mr-5" src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg" alt="" />
                    <img className="h-52 mt-11 mr-5" src="https://www.catalyst-ps.com/gridmedia/img/logo.png" alt="" />
                    <img className="h-64 mr-5" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-logo%2C-real-estate-company-logo-design-template-76b76635e2fba3814172a98727dbd013_screen.jpg?ts=1687806073" alt="" />
                    <img className="h-64 mr-5" src="https://ld-contest-drafts.s3.amazonaws.com/original/1820-8878.jpg" alt="" />

                </div>
            </Marquee>
        </div>
    );
};

export default SponserSlider;