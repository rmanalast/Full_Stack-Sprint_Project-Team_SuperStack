// Services for Rental Items 

import type { Rental } from '../data/rentals';
import * as REPO from '../repository/rentalInventory'

export function getRentals(): Rental[] {
    try {
        const r: Rental[] = REPO.getItems()

        if (!r) 
            {
            throw Error("Rental Not Found");
            }
        else {
            return r;
        }
    }
    catch(e) {
        throw Error(`An Error Occured: ${e}`)
    }
};

export async function toggleIsRented(sku: number) {
        const t: Rental = await REPO.getItemByID(sku);

        await REPO.toggleRented(t.sku);
};

export async function toggleIsSelected(sku: number) {
        const t: Rental = await REPO.getItemByID(sku);

        await REPO.toggleSelected(t.sku);
};