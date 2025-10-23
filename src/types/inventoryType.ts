export type Inventory = {
    sku: number,
    name: string,
    description: string,
    price: number,
    productType: string,
    Image: {
        src: string,
        alt: string
    };
    isOnSale: boolean,
    isInCart: boolean,
    isWishListed: boolean
};