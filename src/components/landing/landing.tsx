import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";

// Import Swiper styles
import 'swiper/react';
import 'swiper/swiper.css'

// import required modules

export function Landing() {
    // Swiper things
    return (
    <>
    <SlideShow />
    <BoxItems />
    </>
    )
};

export default Landing;