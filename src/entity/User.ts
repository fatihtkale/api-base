import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column("timestamp", { nullable: true })
  email_verified_at: Timestamp;

  @Column()
  password: string;
  
  @Column()
  password2: string;

  @Column()
  company_id: number;

  @Column()
  rememberToken: string;

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