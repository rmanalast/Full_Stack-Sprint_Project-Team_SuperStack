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

export const InventoryList: Inventory[] = [
    // 10 Video Games
    {
        sku: 1001,
        name: "Marvel Rivals",
        description: "Action Fighting",
        price: 12.99,
        productType: "Video Game",
        Image: { src: "https://imgs.search.brave.com/dIAG08GtmO3oJts-FIOp77r0EENpKQVuvhwE4MKwrRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVn/YW1lcG9zdC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDgvYWxsLW1hcnZl/bC1yaXZhbHMtc2Vh/c29uLTQtbGVha3Mt/My04NjB4NDg0Lndl/YnA", alt: "Marvel Rivals cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 1002,
        name: "Fortnite",
        description: "Battle Royale",
        price: 10.26,
        productType: "Video Game",
        Image: { src: "https://cdn2.unrealengine.com/card-shortcut-01-1920x1080-6d9c21c4abfb.jpg", alt: "Fortnite Battle Royale" },
        isOnSale: true,
        isInCart: false,
        isWishListed: true
    },
    {
        sku: 1003,
        name: "The Last of Us Part II",
        description: "Story-driven adventure game",
        price: 19.99,
        productType: "Video Game",
        Image: { src: "https://imgs.search.brave.com/yyeNj55cOS2IaHIe_KMbg1_UmnKAVJymD_B8by4cQhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbWVk/aWEucGxheXN0YXRp/b24uY29tL2lzL2lt/YWdlL1NJRVBEQy90/aGUtbGFzdC1vZi11/cy1wYXJ0LWlpLXVw/Z3JhZGVyLWJhY2tn/cm91bmQtZGVza3Rv/cC0wMS1lbi0zMW9j/dDIzPyRuYXRpdmUk", alt: "The Last of Us Part II cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 1004,
        name: "Super Mario Odyssey",
        description: "Platformer",
        price: 29.99,
        productType: "Video Game",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg", alt: "Super Mario Odyssey cover" },
        isOnSale: true,
        isInCart: true,
        isWishListed: false
    },
    {
        sku: 1005,
        name: "God of War",
        description: "Action adventure game",
        price: 24.99,
        productType: "Video Game",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg", alt: "God of War cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 1006,
        name: "Zelda: Breath of the Wild",
        description: "Open world adventure",
        price: 34.99,
        productType: "Video Game",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg", alt: "Zelda: Breath of the Wild cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 1007,
        name: "Spider-Man: Miles Morales",
        description: "Superhero action game",
        price: 14.99,
        productType: "Video Game",
        Image: { src: "https://imgs.search.brave.com/_sZhRgrlo6GT0l6KpztXlAvWlnvIml-hanga9n-yceM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z2cuZGVhbHMvMWYv/ODQvNDIwNTE5N2E3/NjA0ZjEyZjk4YWY3/M2JmZWIwOWZiNzNl/YWRiXzI4OGNyMTYy/LmpwZw", alt: "Spider-Man: Miles Morales cover" },
        isOnSale: true,
        isInCart: false,
        isWishListed: true
    },
    {
        sku: 1008,
        name: "Horizon Forbidden West",
        description: "Open world action RPG",
        price: 39.99,
        productType: "Video Game",
        Image: { src: "https://imgs.search.brave.com/OwkyrnLSWdXUX2t45RL3yV49ZP7-klJAKL70gc89ZcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2hv/cml6b256ZXJvZGF3/bi9pbWFnZXMvZS9l/NS9Ib3Jpem9uX0Zv/cmJpZGRlbl9XZXN0/LmpwZy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8yNjg_Y2I9/MjAyMDA2MTMwMjI0/Mjg", alt: "Horizon Forbidden West cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 1009,
        name: "Elden Ring",
        description: "Action RPG",
        price: 44.99,
        productType: "Video Game",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/8/8d/Elden_Ring_cover.jpg", alt: "Elden Ring cover" },
        isOnSale: true,
        isInCart: false,
        isWishListed: true
    },
    {
        sku: 1010,
        name: "Stardew Valley",
        description: "Farming simulation / RPG",
        price: 14.99,
        productType: "Video Game",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/9/9b/StardewValleyCover.jpg", alt: "Stardew Valley cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },

    // 10 Movies
    {
        sku: 2001,
        name: "Inception (Blu-ray)",
        description: "Sci-fi thriller movie",
        price: 7.5,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg", alt: "Inception movie cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: true
    },
    {
        sku: 2002,
        name: "The Godfather (DVD)",
        description: "Crime drama",
        price: 9.99,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg", alt: "The Godfather cover" },
        isOnSale: true,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 2003,
        name: "The Shawshank Redemption (DVD)",
        description: "Drama",
        price: 8.99,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg", alt: "The Shawshank Redemption cover" },
        isOnSale: false,
        isInCart: true,
        isWishListed: false
    },
    {
        sku: 2004,
        name: "The Dark Knight (Blu-ray)",
        description: "Superhero crime thriller",
        price: 11.99,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg", alt: "The Dark Knight cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 2005,
        name: "Pulp Fiction (DVD)",
        description: "Crime film",
        price: 6.99,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg", alt: "Pulp Fiction cover" },
        isOnSale: true,
        isInCart: false,
        isWishListed: true
    },
    {
        sku: 2006,
        name: "The Matrix (Blu-ray)",
        description: "Sci-fi action",
        price: 9.5,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg", alt: "The Matrix cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 2007,
        name: "Interstellar (Blu-ray)",
        description: "Epic sci-fi",
        price: 12.0,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", alt: "Interstellar cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 2008,
        name: "Parasite (Blu-ray)",
        description: "Thriller/drama",
        price: 10.0,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png", alt: "Parasite cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: true
    },
    {
        sku: 2009,
        name: "Toy Story (DVD)",
        description: "Animated family film",
        price: 5.99,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg", alt: "Toy Story cover" },
        isOnSale: true,
        isInCart: false,
        isWishListed: false
    },
    {
        sku: 2010,
        name: "The Lord of the Rings: The Fellowship of the Ring (Blu-ray)",
        description: "Fantasy epic",
        price: 13.99,
        productType: "Movie",
        Image: { src: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%281998%29.jpg", alt: "LOTR: Fellowship cover" },
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    }
];

export default InventoryList;