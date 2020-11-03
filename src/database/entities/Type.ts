import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Combo from '@database/entities/Combo';

@Entity('types')
class Type {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToMany(() => Combo, combo => combo.primary_type)
  primary_type: Combo[];

  @OneToMany(() => Combo, combo => combo.secundary_type)
  secundary_type: Combo[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Type;
