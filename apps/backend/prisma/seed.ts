import { PrismaClient } from "@prisma/client";
import {RentalData, RetailData}  from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {

    const createManyRentals = await prisma.rental.createMany(
        {
            data: RentalData,
            skipDuplicates: true
        }
    );
    const createManyRetail = await prisma.retail.createMany(
        {
            data: RetailData,
            skipDuplicates: true
        }
    )

};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 