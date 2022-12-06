import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670092635007 implements MigrationInterface {
    name = 'default1670092635007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_shoppingcarts" ("cart_id" integer NOT NULL, "product_name" text NOT NULL, CONSTRAINT "PK_96c6467b916a31fa86fcfa11719" PRIMARY KEY ("cart_id", "product_name"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dfa8c35b439e49a9b84f5f5d9a" ON "product_shoppingcarts" ("cart_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_bbc0fc6da6a59594c8822476ba" ON "product_shoppingcarts" ("product_name") `);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "username" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_a95860aa92d1420e005893043de" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "product_shoppingcarts" ADD CONSTRAINT "FK_dfa8c35b439e49a9b84f5f5d9a3" FOREIGN KEY ("cart_id") REFERENCES "shopping_carts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_shoppingcarts" ADD CONSTRAINT "FK_bbc0fc6da6a59594c8822476ba5" FOREIGN KEY ("product_name") REFERENCES "products"("name") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_shoppingcarts" DROP CONSTRAINT "FK_bbc0fc6da6a59594c8822476ba5"`);
        await queryRunner.query(`ALTER TABLE "product_shoppingcarts" DROP CONSTRAINT "FK_dfa8c35b439e49a9b84f5f5d9a3"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_4c9fb58de893725258746385e16"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_a95860aa92d1420e005893043de"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bbc0fc6da6a59594c8822476ba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dfa8c35b439e49a9b84f5f5d9a"`);
        await queryRunner.query(`DROP TABLE "product_shoppingcarts"`);
    }

}
