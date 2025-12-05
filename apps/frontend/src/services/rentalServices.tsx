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

export async function updateRentals(sku: number[], token: string) {
    try {
        console.log("sent to repo")
        await REPO.updateRental(sku, token);
    }
    catch(e) {
        throw new Error(`AN Error Occured: ${e}`)
    }
};

export async function history(token: string) {
    try {
        const h: number[] = await REPO.getHistory(token)

        if (!h)
        {
            throw new Error("Failed to retrieve history")
        }

        console.log(h)
        return h
    }
    catch(e)
    {
        throw new Error(`An Unexpected Error Occured ${e}`)
    }
}