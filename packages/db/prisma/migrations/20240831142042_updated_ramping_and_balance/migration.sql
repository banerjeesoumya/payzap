/*
  Warnings:

  - Changed the type of `status` on the `OnRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "onRampStatus" AS ENUM ('Success', 'Pending', 'Failed');

-- AlterTable
ALTER TABLE "Merchant" ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "status",
ADD COLUMN     "status" "onRampStatus" NOT NULL;

-- DropEnum
DROP TYPE "OnRampStatus";
