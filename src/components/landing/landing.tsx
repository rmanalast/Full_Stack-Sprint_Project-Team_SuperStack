import "./landing.css";
import SlideShow from "../common/swiper/swiper";
import BoxItems from "../common/item_populator/item_populator";
import PreOrderForm from "../PreOrderForm/pre-order-form";
import type { Inventory } from "../../data/itemsList";
import { useInventory } from "../../hooks/inventoryHook";
import { useClearCart } from "../../hooks/emptyCartCache";
import { SingleSearch } from "../common/singleSearch";


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
      }){

        const item = useInventory();
        
        const clearCart = useClearCart();

        function handleAddtoCart(item: Inventory){
          const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
          const updatedCart = [...existingCart,item];
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          console.log("Cart updated in localStorage:", JSON.parse(localStorage.getItem("cart") || "[]"));
          
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
    

    
      <PreOrderForm />
      < SingleSearch/>
      <br/>
      <h3>Click Here TO Clear Your Cart Cache.</h3>
      <button onClick={clearCart}>Clear Cache</button>
      <ul>
        {item.map(item => (
          <div key ={item.sku}>
            <br/>
            <img src={item.Image.src} 
            alt ={item.Image.alt} 
            className="product-image"
            />       
            <h3>{item.name}</h3>         
            <p>Type: {item.productType}</p>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleAddtoCart(item)}> Add to Cart</button>         
          </div>       
        ))}

      </ul>

        
    </>
    );
}


export default Landing;