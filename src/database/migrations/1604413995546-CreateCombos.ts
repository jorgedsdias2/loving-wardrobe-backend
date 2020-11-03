import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCombos1604413995546 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'combos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'primary_type_id',
            type: 'uuid',
          },
          {
            name: 'secundary_type_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'primary_type',
            columnNames: ['primary_type_id'],
            referencedTableName: 'types',
            referencedColumnNames: ['id'],
          },
          {
            name: 'secundary_type',
            columnNames: ['secundary_type_id'],
            referencedTableName: 'types',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('combos');
  }
}
