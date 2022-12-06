import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670282429649 implements MigrationInterface {
    name = 'default1670282429649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_carts" DROP CONSTRAINT "FK_e6e5eec6a67eb9ceabfbfefe6c2"`);
        await queryRunner.query(`CREATE TABLE "shopping_carts_itens_products" ("shoppingCartsId" integer NOT NULL, "productsId" integer NOT NULL, CONSTRAINT "PK_9571e405c456d47ea1bdf60ab2c" PRIMARY KEY ("shoppingCartsId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c7bbac8c690e173c9f8a8a8151" ON "shopping_carts_itens_products" ("shoppingCartsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2d3f72b05fe1eec73cf62bd283" ON "shopping_carts_itens_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "shopping_carts" ADD CONSTRAINT "FK_e6e5eec6a67eb9ceabfbfefe6c2" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_carts_itens_products" ADD CONSTRAINT "FK_c7bbac8c690e173c9f8a8a81519" FOREIGN KEY ("shoppingCartsId") REFERENCES "shopping_carts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "shopping_carts_itens_products" ADD CONSTRAINT "FK_2d3f72b05fe1eec73cf62bd2831" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_carts_itens_products" DROP CONSTRAINT "FK_2d3f72b05fe1eec73cf62bd2831"`);
        await queryRunner.query(`ALTER TABLE "shopping_carts_itens_products" DROP CONSTRAINT "FK_c7bbac8c690e173c9f8a8a81519"`);
        await queryRunner.query(`ALTER TABLE "shopping_carts" DROP CONSTRAINT "FK_e6e5eec6a67eb9ceabfbfefe6c2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2d3f72b05fe1eec73cf62bd283"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c7bbac8c690e173c9f8a8a8151"`);
        await queryRunner.query(`DROP TABLE "shopping_carts_itens_products"`);
        await queryRunner.query(`ALTER TABLE "shopping_carts" ADD CONSTRAINT "FK_e6e5eec6a67eb9ceabfbfefe6c2" FOREIGN KEY ("client_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
