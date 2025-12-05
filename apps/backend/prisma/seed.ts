import { PrismaClient } from "@prisma/client";
import {RentalData, RetailData,FormData}  from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // 1. Seed Users
  await prisma.user.createMany({
    data: [
      { id: "test-user-1" },
      { id: "test-user-2" },
      { id: "test-user-3" },
      { id: "test-user-4" },
      { id: "test-user-5" },
      { id: "test-user-6" },
      { id: "test-user-7" },
      { id: "test-user-8" },
      { id: "test-user-9" },
      { id: "test-user-10" },
    ],
    skipDuplicates: true,
  });

  const users = await prisma.user.findMany();
  console.log("Seeded users:", users);
  console.log("FormData userIds:", FormData.map(f => f.userId));

    // insert terms to db
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