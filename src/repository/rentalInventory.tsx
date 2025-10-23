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
};

export function toggleSelected(sku: number) {
    const f = rentals.find(r => r.sku === sku);

    if (!f) {
        throw Error(`Item with ID ${sku} not found`)
    }
    else {
        f.isSelected = !f.isSelected;
    }
    return f;
}


export function toggleRented(sku: number) {
    const f = rentals.find(r => r.sku === sku);

    if (!f) {
        throw Error(`Item with ID ${sku} not found`)
    }
    else {
        f.isRented = !f.isRented;
    }
    return f;
}