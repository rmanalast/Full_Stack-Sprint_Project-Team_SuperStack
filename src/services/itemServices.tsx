import type { Inventory } from "../data/itemsList";
import * as REPO from "../repository/storeInventory";


// SERVICES
export function changeWishlist(sku: number): Inventory {
    try {
        const r = REPO.getItemByID(sku);

        if (!r) {
            throw Error(`Item with SKU ${sku} not found`)
        }
        else {
            r.isWishListed = !r.isWishListed;
        }
        return r;
    }
    catch(e) {
        throw Error(`An Error Occured: ${e}`)
    }
};

export function changeCart(sku: number): Inventory {
    try {
        const r = REPO.getItemByID(sku);

        if (!r) {
            throw Error(`Item with SKU ${sku} not found`)
        }
        else {
            r.isInCart = !r.isInCart;
        }
        return r;
    }
    catch(e) {
        throw Error(`An Error Occured ${e}`)
    }
};