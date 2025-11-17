import prisma from "../../../../prisma/client";

export const wishlistService = {
  async getWishlist(email: string) {
    return prisma.wishList.findUnique({
      where: { email },
    });
  },

  async createWishlist(email: string, items: string[]) {
    return prisma.wishList.create({
      data: { email, items },
    });
  },

  async updateWishlist(email: string, items: string[]) {
    return prisma.wishList.update({
      where: { email },
      data: { items },
    });
  },
};