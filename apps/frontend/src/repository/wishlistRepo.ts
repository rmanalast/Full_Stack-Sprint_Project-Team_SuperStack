const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useAuth } from "@clerk/clerk-react";

export const wishlistRepo = {
  async addEmail(email: string) {
    const res = await fetch(`${BASE_URL}/api/v1/wishlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error("Failed to add wishlist email");
    return res.json();
  },

  async getAll() {
    const res = await fetch(`${BASE_URL}/api/v1/wishlist`);
    if (!res.ok) throw new Error("Failed to fetch wishlist");
    return res.json();
  },
};

async getUserWishlist(sessionToken: string) {
  const res = await fetch(`${BASE_URL}/api/v1/wishlist/user`, {
    headers: {
      Authorization: `Bearer ${sessionToken}`
    }
  });

  return res.json();
}