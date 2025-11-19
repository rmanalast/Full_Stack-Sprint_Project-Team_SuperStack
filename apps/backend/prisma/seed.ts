import { PrismaClient } from "@prisma/client";
import {RentalData, RetailData,FormData}  from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {

    // insert terms to db
    const createManyRentals = await prisma.rental.createManyAndReturn(
        {
            data: RentalData,
            skipDuplicates: true
        }
    );
    const createManyRetail = await prisma.retail.createManyAndReturn(
        {
            data: RetailData,
            skipDuplicates: true
        }
    )

    await prisma.form.createMany({
        data: FormData,
        skipDuplicates: true
    });

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