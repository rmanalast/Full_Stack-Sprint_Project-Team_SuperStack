// Services for Rental Items 

import type { Rental } from '../data/rentals';
import * as REPO from '../repository/rentalInventory'

export function changeStatus(sku: number): Rental {
    try {
        const r: Rental = REPO.getItemByID(sku)

        if (!r) {
            throw Error(`Item with SKU ${sku} not found`)
        }
        else {
            r.isRented = !r.isRented;
        }
        return r;
    }
    catch(e) {
        throw Error(`An Error Occured: ${e}`)
    }
};

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

export function changeSelected(sku: number): Rental {
    try {
        const r: Rental = REPO.getItemByID(sku)

        if (!r) {
            throw Error(`Item with SKU : ${sku}`)
        }
        else {
            r.isSelected = !r.isSelected
        }
        return r;
    }
    catch(e) {
        throw Error(`An Error Occured: ${e}`)
    }
};