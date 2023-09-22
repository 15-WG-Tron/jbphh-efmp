/*
  Warnings:

  - You are about to drop the column `name` on the `checklist` table. All the data in the column will be lost.
  - You are about to drop the column `organization` on the `directus_files` table. All the data in the column will be lost.
  - You are about to drop the column `org_id` on the `directus_users` table. All the data in the column will be lost.
  - You are about to drop the column `org_image` on the `landingPage` table. All the data in the column will be lost.
  - You are about to drop the column `page_content` on the `landingPage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "directus_files" DROP CONSTRAINT "directus_files_organization_foreign";

-- DropForeignKey
ALTER TABLE "directus_users" DROP CONSTRAINT "directus_users_org_id_foreign";

-- DropForeignKey
ALTER TABLE "landingPage" DROP CONSTRAINT "landingpage_org_image_foreign";

-- AlterTable
ALTER TABLE "checklist" DROP COLUMN "name",
ADD COLUMN     "title" VARCHAR(255);

-- AlterTable
ALTER TABLE "directus_files" DROP COLUMN "organization";

-- AlterTable
ALTER TABLE "directus_users" DROP COLUMN "org_id",
ADD COLUMN     "organization" INTEGER;

-- AlterTable
ALTER TABLE "landingPage" DROP COLUMN "org_image",
DROP COLUMN "page_content",
ADD COLUMN     "organizationImage" UUID,
ADD COLUMN     "pageContent" TEXT;

-- AddForeignKey
ALTER TABLE "directus_users" ADD CONSTRAINT "directus_users_organization_foreign" FOREIGN KEY ("organization") REFERENCES "organization"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "landingPage" ADD CONSTRAINT "landingpage_organizationimage_foreign" FOREIGN KEY ("organizationImage") REFERENCES "directus_files"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
