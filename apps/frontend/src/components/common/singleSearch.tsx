import { useState } from "react";
import { findItemBySku } from "../../services/itemServices";
import type { Inventory } from "../../data/itemsList";
import "./superSearch.css"

/**
 * singleSearch.tsx will handle rendering buttons that ADD/Remove item based on sku.
 * 
 */

export function SingleSearch(){
    const [skuInput, setSkuInput] = useState("");
    const [item ,setItem] = useState<Inventory | null>(null);
    const [error, setError] = useState("");

    function handleSearch(){
        const result = findItemBySku(skuInput);
        if (result){
            setItem(result);
            setError("")
        } else {
            setItem(null);
            setError(`No item found with SKU "${skuInput}"`)
        }
    }

    function handleRemove(){
        setItem(null);
        setSkuInput("");
        setError("");
    }

    function handleAddtoCart(item: Inventory){
          const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
          const updatedCart = [...existingCart,item];
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          console.log("Cart updated in localStorage:", JSON.parse(localStorage.getItem("cart") || "[]"));
          
        }

    return (
        <>
            <h3>Search Item by SKU</h3>
            <input
                type="text"
                placeholder="Enter SKU"
                value ={skuInput}
                onChange={(e) => setSkuInput(e.target.value)}
                
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p>{error}</p>}

            {item && (
                <div>
                    <h4>{item.name}</h4>
                    <img 
                        src={item.Image.src} 
                        alt={item.Image.alt} 
                        className = "search-result-img"
                    />
                    <p>Type: {item.productType}</p>
                    <p>Price: ${item.price}</p>
                    <p>{item.description}</p>
                    <button onClick={() => handleAddtoCart(item)}>Add Result to Cart </button>
                    <br/>
                    <br/>
                    <button onClick={handleRemove}>Remove search Item Input</button>

                </div>
            )}
        </>
    );

}