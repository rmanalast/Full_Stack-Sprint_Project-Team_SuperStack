import { useEffect, useState } from 'react';
import type { Inventory } from '../../data/itemsList';
import { useClearCart } from "../../hooks/emptyCartCache";



export function AddCart() {
  
  const [cartItems, setCartItems] = useState<Inventory[]>([]);
  const clearCart = useClearCart();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart){
      setCartItems(JSON.parse(storedCart));
    }

  },[]);

  function handleRemove(sku:number){
    const updatedCart = cartItems.filter(item => item.sku !== sku);
    setCartItems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));


  }
  


  return (
    <>
      <h2>Your Cart</h2>
      <h3> Click Here to Clear Cart Cache.</h3>
      <button onClick={clearCart}>Clear Cache</button>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.sku}>
              <br/>
              <img src={item.Image.src} alt={item.Image.alt} className="product-image" />
              <h3>{item.name}</h3>
              <p>Type: {item.productType}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemove(item.sku)}>Remove</button>
            </li>

          ))}

        </ul>
      )}
    </>
        
  );
}
