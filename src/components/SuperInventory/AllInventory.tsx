/*
AllInventory.tsx
For NXT LVL movies.
Renders all Inventory related lists. 
Title and list data are passed to as props, then render on landing page.
*/ 

import InventoryList, { type Inventory } from '../../data/itemsList';
import '../cart/cartStyles.css'



type Props = {
  // label: string;
  items: Inventory[];
  shareAddCart: (item: Inventory) => void;
};


export function DisplayInventory({ items, shareAddCart }: Props) {
  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {InventoryList.map((item: Inventory) => (
            <li key={item.sku}>
                <div className='item-box'>
                    <img src={item.Image.src} alt={item.Image.alt || item.name} />
                </div>
                    {item.name} <br />
                    {item.description} <br />
                    ${item.price.toFixed(2)} <br />
                    {item.productType}
                    <button onClick={() => shareAddCart(item)}>Add to Cart</button>
                
            
            </li>
        ))}
      </ul>
    </div>
  );
}