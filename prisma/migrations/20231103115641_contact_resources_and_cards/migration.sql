-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'draft',
    "user_created" UUID,
    "date_created" TIMESTAMPTZ(6),
    "user_updated" UUID,
    "date_updated" TIMESTAMPTZ(6),
    "phoneNumber" VARCHAR(255),
    "name" VARCHAR(255),
    "jobTitle" VARCHAR(255),
    "location" VARCHAR(255),
    "emailAddress" VARCHAR(255),
    "organization" INTEGER,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_cards" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'draft',
    "user_created" UUID,
    "date_created" TIMESTAMPTZ(6),
    "user_updated" UUID,
    "date_updated" TIMESTAMPTZ(6),
    "title" VARCHAR(255),
    "link" VARCHAR(255),
    "description" VARCHAR(255),

    CONSTRAINT "homepage_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resources" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'draft',
    "user_created" UUID,
    "date_created" TIMESTAMPTZ(6),
    "user_updated" UUID,
    "date_updated" TIMESTAMPTZ(6),
    "name" VARCHAR(255),
    "link" VARCHAR(255),
    "image" UUID,
    "description" VARCHAR(255),

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_organization_foreign" FOREIGN KEY ("organization") REFERENCES "organization"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "homepage_cards" ADD CONSTRAINT "homepage_cards_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "homepage_cards" ADD CONSTRAINT "homepage_cards_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_image_foreign" FOREIGN KEY ("image") REFERENCES "directus_files"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
