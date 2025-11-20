// Services for Rental Items 

import type { Rental } from '../data/rentals';
import * as REPO from '../repository/rentalInventory'

export async function getRentals() {
    try {
        const r: Rental[] = await REPO.getItems()

        if (!r) 
            {
            throw Error("Rental Not Found");
            }
        else {
            console.log(r)
            return r;
        }
    }
    catch(e) {
        throw new Error(`An Error Occured: ${e}`)
    }
};

export async function updateRentals(sku: number[]) {
    try {
        await REPO.updateRental(sku);
    }
    catch(e) {
        throw new Error(`AN Error Occured: ${e}`)
    }
};