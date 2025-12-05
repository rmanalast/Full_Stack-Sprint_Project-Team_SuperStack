import { Request, Response } from "express";
import { wishlistService } from "../services/wishlistService";

export const wishlistController = {

  // Get all wishlists
  async getAllWishlists(_req: Request, res: Response) {
  try {
    const data = await wishlistService.getAllWishlists();
    res.status(200).json(data);
  } catch (error) {
      res.status(500).json({ error: "Failed to fetch wishlists." });
    }
  },

  // Get a wishlist by email
  async getWishlist(req: Request, res: Response) {
    const email = req.params.email;
    const result = await wishlistService.getWishlist(email);

    if (!result) return res.status(404).json({ message: "No wishlist found." });
    return res.json(result);
  },

  // Create or update a wishlist
  async createOrUpdateWishlist(req: Request, res: Response) {
    try {
      const { email } = req.body;

      const entry = await wishlistService.createOrUpdateWishlist(email);

      res.status(201).json(entry);
    } catch (error) {
      res.status(500).json({ error: "Failed to save wishlist" });
    }
  },

  // Remove a wishlist by email
  async removeWishlist(req: Request, res: Response) {
    const email = req.params.email;
    await wishlistService.getWishlist(email);

    return res.json({ message: "Wishlist removed successfully." });
  },
};

  // Get wishlist for authenticated user
  async getUserWishlist(req: Request, res: Response) {
    const userId = req.auth.userId;  // Clerk auto injects this

    if (!userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    try {
      const wishlist = await wishlistService.getWishlistByUserId(userId);
      return res.json(wishlist);
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch user wishlist" });
    }
  }