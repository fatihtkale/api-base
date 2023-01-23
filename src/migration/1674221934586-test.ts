import {MigrationInterface, QueryRunner} from "typeorm";

export class test1674221934586 implements MigrationInterface {
    name = 'test1674221934586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password2" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password2"`);
    }

}
