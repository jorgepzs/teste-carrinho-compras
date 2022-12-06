import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669860610981 implements MigrationInterface {
    name = 'default1669860610981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "description" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "name" TO "description"`);
    }

}
