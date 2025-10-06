import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";
import PreOrderForm from "../PreOrderForm/pre-order-form";
import type { Inventory } from "../../data/itemsList";
import { DisplayInventory } from "../SuperInventory/AllInventory";
import type { Dispatch, SetStateAction } from 'react';

// Import Swiper styles
import 'swiper/react';
import 'swiper/swiper.css'


export function Landing(
      {
        itemList,
        itemUpdater
      }:
      {
        itemList: Inventory[];
        itemUpdater: React.Dispatch<React.SetStateAction<Inventory[]>>
      })
  
    function addToCart(item: Inventory) {
    setCartItems(prev => {
    if (prev.some(i => i.sku === item.sku)) return prev; 
    return [...prev, item];
     });
    }

    // Swiper things
    return (
    <>
    <h2 className="announcements">
        ANNOUNCEMENTS
    </h2>
    <SlideShow />
    <h2>Weekly Deals</h2>
    <BoxItems
        itemsList={itemList}
        itemUpdater={itemUpdater}
        listVal="isOnSale"
        sortingtype={true}
        allowRemove={false}
        
        />
    

    <DisplayInventory items={InventoryList} shareAddCart={addToCart} />
    <PreOrderForm />
    
    </>
    )
};


export default Landing;