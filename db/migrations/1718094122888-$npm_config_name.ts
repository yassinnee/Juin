import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1718094122888 implements MigrationInterface {
    name = ' $npmConfigName1718094122888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Lastname" character varying NOT NULL, "date_birthday" TIMESTAMP NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "Type" "public"."users_type_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "idUsers" integer NOT NULL, "name" character varying NOT NULL, "Date_cours" TIMESTAMP NOT NULL, "desc" character varying NOT NULL, "picturs" character varying NOT NULL, "create_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscribers" ("id" SERIAL NOT NULL, "idUsers" integer NOT NULL, "idProduits" integer NOT NULL, "date_subscribes" TIMESTAMP NOT NULL, CONSTRAINT "PK_cbe0a7a9256c826f403c0236b67" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subscribers"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
