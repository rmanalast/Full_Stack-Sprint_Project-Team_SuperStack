import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";

import PreOrderForm from "../PreOrderForm/pre-order-form";
import InventoryList from "../../data/itemsList";
import { DisplayInventory } from "../SuperInventory/AllInventory";
import movie from '../../data/movie_inventory.json';
import game from '../../data/game_inventory.json';

// Import Swiper styles
import 'swiper/react';
import 'swiper/swiper.css'

// import required modules

export function Landing() {
    // Swiper things
    return (
    <>
    <SlideShow />
    <h2>Weekly Deals</h2>
    <BoxItems
        itemsList={InventoryList}
        listVal="isOnSale"
        sortingtype={true}
        />
    <DisplayInventory label="Movies" items={movie} />
    <DisplayInventory label="Games" items={game} />
    <PreOrderForm />
    
    </>
    )
};

export default Landing;