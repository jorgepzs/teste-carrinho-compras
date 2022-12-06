import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670151473636 implements MigrationInterface {
    name = 'default1670151473636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens" ("shoppingCartsId" integer NOT NULL, "productsId" integer NOT NULL, CONSTRAINT "PK_2af349dd834a9d246b7bab768a1" PRIMARY KEY ("shoppingCartsId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_50f6d82a449f3857b2fa3cb4bb" ON "itens" ("shoppingCartsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bce30ead1495702e3e6dfd4f3c" ON "itens" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "itens" ADD CONSTRAINT "FK_50f6d82a449f3857b2fa3cb4bbe" FOREIGN KEY ("shoppingCartsId") REFERENCES "shopping_carts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "itens" ADD CONSTRAINT "FK_bce30ead1495702e3e6dfd4f3ca" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens" DROP CONSTRAINT "FK_bce30ead1495702e3e6dfd4f3ca"`);
        await queryRunner.query(`ALTER TABLE "itens" DROP CONSTRAINT "FK_50f6d82a449f3857b2fa3cb4bbe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bce30ead1495702e3e6dfd4f3c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_50f6d82a449f3857b2fa3cb4bb"`);
        await queryRunner.query(`DROP TABLE "itens"`);
    }

}
