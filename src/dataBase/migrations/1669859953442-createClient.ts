import { MigrationInterface, QueryRunner } from "typeorm";

export class createClient1669859953442 implements MigrationInterface {
  name = "createClient1669859953442";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" SERIAL NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "shopping_carts" ("id" SERIAL NOT NULL, "total" integer NOT NULL, "client_id" integer, CONSTRAINT "PK_7420877774b880a61269dda7e8a" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "clients" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "shopping_carts" ADD CONSTRAINT "FK_e6e5eec6a67eb9ceabfbfefe6c2" FOREIGN KEY ("client_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "shopping_carts" DROP CONSTRAINT "FK_e6e5eec6a67eb9ceabfbfefe6c2"`
    );
    await queryRunner.query(`DROP TABLE "clients"`);
    await queryRunner.query(`DROP TABLE "shopping_carts"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
