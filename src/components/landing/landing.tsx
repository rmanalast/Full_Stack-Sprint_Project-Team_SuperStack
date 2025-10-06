import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";
import { Games } from "../Games/GameInventory";
import { Movies } from "../Movies/MovieInventory";
import PreOrderForm from "../PreOrderForm/pre-order-form";
import InventoryList from "../../data/itemsList";

// Import Swiper styles
import 'swiper/react';
import 'swiper/swiper.css'

// import required modules

export function Landing() {
    // Swiper things
    return (
    <>
    <h2 className="announcements">
        ANNOUNCEMENTS
    </h2>
    <SlideShow />
    <h2>Weekly Deals</h2>
    <BoxItems
        itemsList={InventoryList}
        listVal="isOnSale"
        sortingtype={true}
        />
    <Games />
    <Movies />
    <PreOrderForm />
    </>
    )
};

export default Landing;