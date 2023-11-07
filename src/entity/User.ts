import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column({nullable: true})
  zip_code: string;

  @Column()
  created: string;

  @Column()
  modified: string;

  @Column()
  deletedAt: string;
}
