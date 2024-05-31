-- CreateTable
CREATE TABLE "Gift" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "photoUrl" VARCHAR(255) NOT NULL,
    "description" VARCHAR(510) NOT NULL,
    "voltage" INTEGER NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "giftBuyerId" BIGINT,
    "giftBuyerMessage" VARCHAR(510) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeddingGuest" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeddingGuest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_giftBuyerId_fkey" FOREIGN KEY ("giftBuyerId") REFERENCES "WeddingGuest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
