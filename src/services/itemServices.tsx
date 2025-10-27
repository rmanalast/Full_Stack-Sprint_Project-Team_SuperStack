import { getItemBySku } from "../repository/inventoryRepo";
import type { Inventory } from "../types/inventoryType";
/**
 * This service seraches,casts to number,validates  and returns item by sku.
 * 
 */

export function findItemBySku(rawInput:string): Inventory | null {
    const sku  = Number(rawInput);
    if (!rawInput || isNaN(sku) || sku <=0){
        console.warn(`'Invalid SKU input: "${rawInput}"`);
        return null;
    }
    try{
        return getItemBySku(sku);      
    } catch (error) {
        console.warn(`Item with SKU ${sku} not found`);
        return null;

    }
}