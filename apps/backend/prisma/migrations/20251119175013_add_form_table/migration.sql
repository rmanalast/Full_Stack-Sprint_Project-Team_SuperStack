-- CreateTable
CREATE TABLE "retail" (
    "sku" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productType" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isOnSale" BOOLEAN NOT NULL DEFAULT false,
    "isInCart" BOOLEAN NOT NULL DEFAULT false,
    "isWishListed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "retail_pkey" PRIMARY KEY ("sku")
);

-- CreateTable
CREATE TABLE "rental" (
    "sku" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isRented" BOOLEAN NOT NULL DEFAULT false,
    "isSelected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "rental_pkey" PRIMARY KEY ("sku")
);

-- CreateTable
CREATE TABLE "Notfication" (
    "email" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notfication_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "wishList" (
    "email" TEXT NOT NULL,
    "items" TEXT[],
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wishList_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "card" TEXT NOT NULL,
    "expiry" TEXT NOT NULL,
    "cve" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
