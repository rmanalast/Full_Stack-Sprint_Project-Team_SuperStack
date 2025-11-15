import { retail, rental } from "@prisma/client";
import { Prisma } from "@prisma/client";

export const RetailData: retail[] = [
    // 10 Video Games
    {
        sku: 1001,
        name: "Marvel Rivals",
        description: "Action Fighting",
        price: 12.99,
        productType: "Video Game",
        image: "https://imgs.search.brave.com/dIAG08GtmO3oJts-FIOp77r0EENpKQVuvhwE4MKwrRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVn/YW1lcG9zdC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDgvYWxsLW1hcnZl/bC1yaXZhbHMtc2Vh/c29uLTQtbGVha3Mt/My04NjB4NDg0Lndl/YnA",
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
        image: "https://cdn2.unrealengine.com/card-shortcut-01-1920x1080-6d9c21c4abfb.jpg",
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
        image: "https://imgs.search.brave.com/yyeNj55cOS2IaHIe_KMbg1_UmnKAVJymD_B8by4cQhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbWVk/aWEucGxheXN0YXRp/b24uY29tL2lzL2lt/YWdlL1NJRVBEQy90/aGUtbGFzdC1vZi11/cy1wYXJ0LWlpLXVw/Z3JhZGVyLWJhY2tn/cm91bmQtZGVza3Rv/cC0wMS1lbi0zMW9j/dDIzPyRuYXRpdmUk",
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
        image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
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
        image: "https://imgs.search.brave.com/_sZhRgrlo6GT0l6KpztXlAvWlnvIml-hanga9n-yceM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z2cuZGVhbHMvMWYv/ODQvNDIwNTE5N2E3/NjA0ZjEyZjk4YWY3/M2JmZWIwOWZiNzNl/YWRiXzI4OGNyMTYy/LmpwZw",
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
        image: "https://imgs.search.brave.com/OwkyrnLSWdXUX2t45RL3yV49ZP7-klJAKL70gc89ZcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2hv/cml6b256ZXJvZGF3/bi9pbWFnZXMvZS9l/NS9Ib3Jpem9uX0Zv/cmJpZGRlbl9XZXN0/LmpwZy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8yNjg_Y2I9/MjAyMDA2MTMwMjI0/Mjg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Elden_Ring_cover.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/9/9b/StardewValleyCover.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
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
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%281998%29.jpg",
        isOnSale: false,
        isInCart: false,
        isWishListed: false
    }
];

export const RentalData: rental[] = [
    {
        sku: 1001,
        name: "Inception",
        description: "A skilled thief is offered a chance to have his past crimes forgiven if he can plant an idea into a person's subconscious.",
        productType: "movie",
        image: "https://moviemaps.org/images/1cvt",
        isRented: false,
        isSelected: false
    },
    {
        sku: 1002,
        name: "The Matrix",
        description: "A computer hacker learns the nature of his reality and his role in the war against its controllers.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 1003,
        name: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 1004,
        name: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 1005,
        name: "The Dark Knight",
        description: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 1006,
        name: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 1007,
        name: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 1008,
        name: "Fight Club",
        description: "An insomniac office worker forms an underground fight club that evolves into something much more.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 1009,
        name: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 1010,
        name: "Avengers: Endgame",
        description: "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' actions.",
        productType: "movie",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        isRented: false,
        isSelected: false
    },

    // Video Games
    {
        sku: 2001,
        name: "The Legend of Zelda: Breath of the Wild",
        description: "Explore a world of adventure in the critically acclaimed Zelda game.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 2002,
        name: "Red Dead Redemption 2",
        description: "An epic tale of life in America's unforgiving heartland.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 2003,
        name: "God of War (2018)",
        description: "Kratos and his son embark on a journey across Norse realms.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 2004,
        name: "Elden Ring",
        description: "A fantasy actionRPG adventure crafted by Miyazaki and Martin.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Elden_Ring_cover.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 2005,
        name: "SpiderMan: Miles Morales",
        description: "Take control of Miles Morales as the new SpiderMan.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/SpiderMan_Miles_Morales_cover.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 2006,
        name: "Horizon Forbidden West",
        description: "Aloy returns in a postapocalyptic world filled with robotic beasts.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/7/79/Horizon_Forbidden_West.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 2007,
        name: "Cyberpunk 2077",
        description: "An openworld RPG set in the futuristic Night City.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        isRented: false,
        isSelected: false
    },
    {
        sku: 2008,
        name: "Minecraft",
        description: "A sandbox game where players can build, explore, and survive.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        isRented: false,
        isSelected: false
    },
    {
        sku: 2009,
        name: "Grand Theft Auto V",
        description: "Experience the lives of three criminals in a sprawling open world.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V_cover.jpg",
        isRented: true,
        isSelected: false
    },
    {
        sku: 2010,
        name: "The Witcher 3: Wild Hunt",
        description: "Geralt of Rivial's epic journey through a wartorn continent.",
        productType: "video_game",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        isRented: false,
        isSelected: false
    }
]