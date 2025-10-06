import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";

import PreOrderForm from "../PreOrderForm/pre-order-form";
import InventoryList, { type Inventory } from "../../data/itemsList";
import { DisplayInventory } from "../SuperInventory/AllInventory";
//import movie from '../../data/movie_inventory.json';
// import game from '../../data/game_inventory.json';
import type { Dispatch, SetStateAction } from 'react';

// Import Swiper styles
import 'swiper/react';
import 'swiper/swiper.css'


type LandingProps = {
    cartItems: Inventory[];
    setCartItems: Dispatch<SetStateAction<Inventory[]>>;
  
};

export function Landing({ setCartItems }: LandingProps) {
    function addToCart(item: Inventory) {
    setCartItems(prev => {
    if (prev.some(i => i.sku === item.sku)) return prev; 
    return [...prev, item];
     });
    }

    
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
    

    <DisplayInventory items={InventoryList} shareAddCart={addToCart} />
    <PreOrderForm />
    
    </>
    )
};


export default Landing;