import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684371007747 implements MigrationInterface {
    name = 'InitialMigration1684371007747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wishlist" ADD "url" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "wishlist" ADD "name" character varying(32) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wishlist" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "wishlist" DROP COLUMN "url"`);
    }

}
