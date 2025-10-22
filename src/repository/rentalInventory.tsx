import { rentals } from "../data/rentals";


export function getItems() {
    return rentals;
}

export function getItemByID(sku: number) {
    const r = rentals.find(t => t.sku === sku);


    if (!r) {
        throw Error(`Item with ID: ${sku} cannot be found`);
    }

    return r;
}