import { rentals, type Rental } from "../data/rentals";


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

export function deleteRental(sku: number) {
    const f = rentals.findIndex(r => r.sku === sku);

    if (!f) {
        throw Error(`Item with ID ${sku} not found`)
    }
    else {
        rentals.splice(f,1)
        return `Item ${f} deleted successfully`
    }
};

export function updateRental(sku: number, rental: Partial<Rental>) {
    const f = rentals.findIndex(r => r.sku === sku);

    if (!f) {
        throw Error(`Item with ID ${sku} not found`)
    }
    else {
        rentals[f] = { ...rentals[f], ...rental };
    }
    return f;
};

export function createRental(rental: Partial<Rental>) {
    if (!rental.sku || !rental.name) {
        throw new Error("Rental must include at least a SKU and a name");
    }

    const exists = rentals.some(r => r.sku === rental.sku);
    if (exists) {
        throw new Error(`Item with ID ${rental.sku} already exists`);
    }

    const newRental: Rental = {
        ...rental,

        rented: rental.isRented ?? false,
        selected: rental.isSelected ?? false
        
    } as Rental;

    rentals.push(newRental);
    return newRental;
}

