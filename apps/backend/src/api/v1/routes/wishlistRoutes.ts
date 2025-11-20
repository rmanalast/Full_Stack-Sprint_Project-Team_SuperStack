import { Router } from "express";
import { wishlistController } from "../controllers/wishlistController";
import { validateWishlist } from "../validations/wishlistValidation";

const router = Router();

// Get all wishlists
router.get("/", wishlistController.getAllWishlists);

// Get wishlist by email
router.get("/:email", wishlistController.getWishlist);

// Create or update wishlist
router.post("/", validateWishlist, wishlistController.createOrUpdateWishlist);

// Delete wishlist
router.delete("/:email", wishlistController.removeWishlist);

export { router as wishlistRoute };