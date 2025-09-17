type Inventory = {
    sku: number,
    name: string,
    description: string,
    price: number,
    image: string
}

const InventoryList: Inventory[] = [

    {
        sku: 1,
        name: "Marvel Rivals",
        description: "Video Game",
        price: 12.99,
        image: "https://imgs.search.brave.com/dIAG08GtmO3oJts-FIOp77r0EENpKQVuvhwE4MKwrRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVn/YW1lcG9zdC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDgvYWxsLW1hcnZl/bC1yaXZhbHMtc2Vh/c29uLTQtbGVha3Mt/My04NjB4NDg0Lndl/YnA"
    },
    {
        sku: 2,
        name: "Fortnite",
        description: "Video Game",
        price: 10.26,
        image: "https://cdn2.unrealengine.com/card-shortcut-01-1920x1080-6d9c21c4abfb.jpg"
    }
];

export default InventoryList;