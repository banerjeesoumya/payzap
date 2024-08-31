/*
  Warnings:

  - Made the column `email` on table `Merchant` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `status` on the `OnRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OnRampStatus" AS ENUM ('Success', 'Failure', 'Processing');

-- AlterTable
ALTER TABLE "Merchant" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "status",
ADD COLUMN     "status" "OnRampStatus" NOT NULL;

-- DropEnum
DROP TYPE "onRampStatus";
