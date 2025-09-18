import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";
import { Games } from "../Games/GameInventory";
import { Movies } from "../Movies/MovieInventory";
import PreOrderForm from "../PreOrderForm/pre-order-form";

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
    <Games />
    <Movies />
    <PreOrderForm />
    </>
    )
};

export default Landing;