import { Request, Response } from "express";
import { wishlistService } from "../services/wishlistService";

export const wishlistController = {
  async getWishlist(req: Request, res: Response) {
    const email = req.params.email;
    const result = await wishlistService.getWishlist(email);

    if (!result) return res.status(404).json({ message: "No wishlist found." });
    return res.json(result);
  },

  async createOrUpdateWishlist(req: Request, res: Response) {
    const { email, items } = req.body;

    // check if a wishlist already exists, then update or create accordingly
    const existing = await wishlistService.getWishlist(email);
    let updated;
    if (existing) {
      updated = await wishlistService.updateWishlist(email, items);
    } else {
      updated = await wishlistService.createWishlist(email, items);
    }

    return res.json(updated);
  },

  async removeWishlist(req: Request, res: Response) {
    const email = req.params.email;
    await wishlistService.getWishlist(email);

    return res.json({ message: "Wishlist removed successfully." });
  },
};
