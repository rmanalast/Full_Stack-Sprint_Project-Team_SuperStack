import prisma from "../../../../prisma/client";

import { rental } from "@prisma/client";


export const fetchAllRentals = async(): Promise<rental[]> => {
    return prisma.rental.findMany()
}

export const updatedRental = async(
    s: number,
    condition: boolean
): Promise<rental> => {
    const updatedRental = await prisma.rental.update({
        where: {
            sku: s
        },
        data: {
            isRented: condition
        }
    });
    return updatedRental
}