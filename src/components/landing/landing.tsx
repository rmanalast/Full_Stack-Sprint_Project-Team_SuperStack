import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";
import { Games } from "../Games/GameInventory";
import { Movies } from "../Movies/MovieInventory";
import PreOrderForm from "../PreOrderForm/pre-order-form";
import type { Inventory } from "../../data/itemsList";

// Import Swiper styles
import 'swiper/react';
import 'swiper/swiper.css'

// import required modules

export function Landing(
      {
        itemList,
        itemUpdater
      }:
      {
        itemList: Inventory[];
        itemUpdater: React.Dispatch<React.SetStateAction<Inventory[]>>
      }
) {
    // Swiper things
    return (
    <>
    <SlideShow />
    <h2>Weekly Deals</h2>
    <BoxItems
        itemsList={itemList}
        itemUpdater={itemUpdater}
        listVal="isOnSale"
        sortingtype={true}
        allowRemove={false}
        
        />
    <Games />
    <Movies />
    <PreOrderForm />
    </>
    )
};

export default Landing;