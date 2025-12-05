import { User } from "@prisma/client";
import prisma from "../../../../prisma/client";

export const getUserById = async (id: string): Promise<User | null> => {
    const user: User | null = await prisma.user.findUnique(
        {
            where: {
                id: id
            }
        }
    );

    if (!user) {
        return null;
    } else {
        return user;
    }
}

export const createUser = async (userData: { id: string }): Promise<User> => {
    const newUser = await prisma.user.create({
        data: {
            ...userData
        }
    });

    return newUser;
};

export const UserRentals = async (userId: string ): Promise<number[]> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            rentals: {
                select: {
                    sku: true,
                },
            },
        },
    });

    if (!user) return [];

    const a = user.rentals.map(rental => rental.sku);
    return a;
};

export const userRented = async (userId: string, sku: number[]): Promise<number[]> => {
    await prisma.user.update({
        where: { id: userId },
        data: {
            rentals: {
                connect: sku.map(sku => ({ sku })),
            },
        },
    });
    return sku
}