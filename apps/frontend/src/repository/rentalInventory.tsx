import { type Rental } from "../data/rentals";


type RentalsResponseJSON = {message: string, data: Rental[]};

// Base url for backend
// Vite provides this value from the .env file rather than dotenv package
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5437";
const BASE_URL = `${API_BASE}/api/v1`;
const RENTAL_ENDPOINT = "/rentals";

export async function getItems(): Promise<Rental[]> {
    const response: Response = await fetch(`${BASE_URL}${RENTAL_ENDPOINT}`);

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }

    const json: RentalsResponseJSON = await response.json();
    return json.data;
};

export async function updateRental(s: number[]) {
    console.log("Sending body:", JSON.stringify({ rentals: s }));


    const response: Response = await fetch(`${BASE_URL}${RENTAL_ENDPOINT}`, 
        {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({rentals: s})
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update")
    };
};
