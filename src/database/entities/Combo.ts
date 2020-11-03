import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Type from '@database/entities/Type';

@Entity('combos')
class Combo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  primary_type_id: string;

  @Column()
  secundary_type_id: string;

  @ManyToOne(() => Type, type => type.primary_type, { eager: true })
  @JoinColumn({ name: 'primary_type_id' })
  primary_type: Type;

  @ManyToOne(() => Type, type => type.secundary_type, { eager: true })
  @JoinColumn({ name: 'secundary_type_id' })
  secundary_type: Type;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Combo;
