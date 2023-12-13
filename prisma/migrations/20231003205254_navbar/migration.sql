-- CreateTable
CREATE TABLE "navbar" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'draft',
    "user_created" UUID,
    "date_created" TIMESTAMPTZ(6),
    "user_updated" UUID,
    "date_updated" TIMESTAMPTZ(6),
    "name" VARCHAR(255),

    CONSTRAINT "navbar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "navbar" ADD CONSTRAINT "navbar_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "navbar" ADD CONSTRAINT "navbar_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
