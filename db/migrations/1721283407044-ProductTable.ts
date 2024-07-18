import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductTable1721283407044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`
            CREATE TABLE "products" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "name" character varying(225) NOT NULL, 
            "description" character varying(225) NOT NULL, 
            "price" character varying(20) NOT NULL, 
            "image_url" character varying(225) NOT NULL, 
            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),  
            PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
    }

}
