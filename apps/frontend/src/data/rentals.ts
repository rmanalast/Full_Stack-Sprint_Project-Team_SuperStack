export type Rental = {
    sku: number,
    name: string,
    description: string,
    productType: string,
    Image: {
        src: string,
        alt: string
    };
    isRented: boolean,
    isSelected: boolean
};


export const rentals: Rental[] = [
    // Movies
    {
        sku: 1001,
        name: "Inception",
        description: "A skilled thief is offered a chance to have his past crimes forgiven if he can plant an idea into a person's subconscious.",
        productType: "movie",
        Image: {
            src: "https://moviemaps.org/images/1cvt",  // poster URL :contentReference[oaicite:0]{index=0}
            alt: "Inception movie poster"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 1002,
        name: "The Matrix",
        description: "A computer hacker learns the nature of his reality and his role in the war against its controllers.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            alt: "The Matrix movie poster"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 1003,
        name: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            alt: "The Godfather movie poster"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 1004,
        name: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            alt: "Interstellar movie poster"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 1005,
        name: "The Dark Knight",
        description: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
            alt: "The Dark Knight movie poster"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 1006,
        name: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg",
            alt: "Pulp Fiction movie poster"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 1007,
        name: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
            alt: "Forrest Gump movie poster"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 1008,
        name: "Fight Club",
        description: "An insomniac office worker forms an underground fight club that evolves into something much more.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
            alt: "Fight Club movie poster"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 1009,
        name: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
            alt: "The Shawshank Redemption movie poster"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 1010,
        name: "Avengers: Endgame",
        description: "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' actions.",
        productType: "movie",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
            alt: "Avengers: Endgame movie poster"
        },
        isRented: false,
        isSelected: false
    },

    // Video Games
    {
        sku: 2001,
        name: "The Legend of Zelda: Breath of the Wild",
        description: "Explore a world of adventure in the critically acclaimed Zelda game.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
            alt: "The Legend of Zelda: Breath of the Wild cover"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 2002,
        name: "Red Dead Redemption 2",
        description: "An epic tale of life in America's unforgiving heartland.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
            alt: "Red Dead Redemption 2 cover"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 2003,
        name: "God of War (2018)",
        description: "Kratos and his son embark on a journey across Norse realms.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
            alt: "God of War (2018) cover"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 2004,
        name: "Elden Ring",
        description: "A fantasy actionRPG adventure crafted by Miyazaki and Martin.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/8/8d/Elden_Ring_cover.jpg",
            alt: "Elden Ring game cover"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 2005,
        name: "SpiderMan: Miles Morales",
        description: "Take control of Miles Morales as the new SpiderMan.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/0/0e/SpiderMan_Miles_Morales_cover.jpg",
            alt: "SpiderMan: Miles Morales cover"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 2006,
        name: "Horizon Forbidden West",
        description: "Aloy returns in a postapocalyptic world filled with robotic beasts.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/7/79/Horizon_Forbidden_West.jpg",
            alt: "Horizon Forbidden West game cover"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 2007,
        name: "Cyberpunk 2077",
        description: "An openworld RPG set in the futuristic Night City.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
            alt: "Cyberpunk 2077 cover"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 2008,
        name: "Minecraft",
        description: "A sandbox game where players can build, explore, and survive.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
            alt: "Minecraft game cover"
        },
        isRented: false,
        isSelected: false
    },
    {
        sku: 2009,
        name: "Grand Theft Auto V",
        description: "Experience the lives of three criminals in a sprawling open world.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V_cover.jpg",
            alt: "Grand Theft Auto V cover"
        },
        isRented: true,
        isSelected: false
    },
    {
        sku: 2010,
        name: "The Witcher 3: Wild Hunt",
        description: "Geralt of Rivial's epic journey through a wartorn continent.",
        productType: "video_game",
        Image: {
            src: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",  // from MobyGames/Commons :contentReference[oaicite:1]{index=1}
            alt: "The Witcher 3: Wild Hunt game cover"
        },
        isRented: false,
        isSelected: false
    }
];