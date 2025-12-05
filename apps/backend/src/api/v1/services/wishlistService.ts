import prisma from "../../../../prisma/client";

export const wishlistService = {

  // Get all wishlists
  async getAllWishlists() {
    return prisma.wishList.findMany();
  },
  
  // Get a wishlist by email
  async getWishlist(email: string) {
    return prisma.wishList.findUnique({
      where: { email },
    });
  },

  // Create a new wishlist or update an existing one based on email
  async createOrUpdateWishlist(email: string) {
    return prisma.wishList.upsert({
      where: { email },
      update: {},
      create: { email },
    });
  },

  // Remove a wishlist by email
  async removeWishlist(email: string) {
    return prisma.wishList.delete({
      where: { email },
    });
  }
};

async function getWishlistByUserId(userId: string) {
  return prisma.wishList.findMany({
    where: { userId }
  });
}