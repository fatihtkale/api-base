import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Fields {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string

  @Column()
  company_id: number

  @Column('jsonb')
  fields: object[]
  
  @Column()
  is_primary: boolean

  @Column()
  is_deleted: boolean

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
}
