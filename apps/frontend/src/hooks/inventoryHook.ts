import { useEffect, useState } from "react";
import type { Inventory } from "../data/itemsList";
import { fetchItems } from "../repository/inventoryRepo";

/* 
* inventoryHook.tsx
* Render a complete list whenever called. 
* */
export function useInventory(): Inventory[] {
    const [items, setItems] = useState<Inventory[]>([]);
    
    useEffect(() => {
        console.log("Called Inventory Hook");
        const data = fetchItems();
        setItems(data);
    },[]);

    return items;
    
}