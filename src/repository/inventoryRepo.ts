import type { Inventory } from '../types/inventoryType';
import { InventoryList } from './mockInventory';

/**
 * File:InventoryRepo.ts
 * CRUD will be managed here.
 * This repo will interact whith our mock data.
 */

// Get all Products/Services
export function fetchItems(): Inventory[]{
    console.log("fectch all items was called, succesfully.")
    return InventoryList;
}

// Get item by Stock Keeping Unit(SKU).
export function getItemBySku(sku:number) : Inventory{
    const foundItem = InventoryList.find(item => item.sku === sku);
    console.log("Called GET item by sku,succesfully");

    if(!foundItem){
        throw new Error(`Failed to fetch id with ${sku}`);
    }
    
    
    return foundItem
}

// UPDATE: update invenotry with async function.
export async function updateInventory(item:Inventory): Promise<Inventory>{
    const foundItemIndex = InventoryList.findIndex(i=> i.sku === item.sku);
    console.log("Called UPDATE item by sku,succesfully");

    if(foundItemIndex === -1){
        throw new Error(`Failed to update item with ${item.sku}`);
    }

    InventoryList[foundItemIndex] = item;
    return InventoryList[foundItemIndex]
}


export async function postItem(item :Inventory) : Promise<Inventory> {
    InventoryList.push(item);
    console.log(`Item Added succesfully! ${JSON.stringify(item)}`);
    return item;
}


export async function deleteItem (item:Inventory) : Promise<void>{

    const foundItemIndex = InventoryList.findIndex(i => i.sku === item.sku );
    
    if(foundItemIndex === -1){
        throw new Error(`Failed to delete item with ${item.sku}`);
    } else {
        InventoryList.splice(foundItemIndex, 1);
        console.log(`Item Deleted: ${item}`);
    }

}







