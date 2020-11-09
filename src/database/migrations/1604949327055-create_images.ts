import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1604949327055 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "orphanage_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "ImageOrphanage", // nome para esta FK.
            columnNames: ["orphanage_id"], // Na tabela atual qual a coluna com valor de FK
            referencedTableName: "orphanages", // Faz referência a determinada tabela.
            referencedColumnNames: ["id"], // Na tabela referenciada , define a coluna que estamos referenciando.
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
