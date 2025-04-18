import { Report } from 'src/reports/reports.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: [];

  @AfterInsert()
  logInsert() {
    console.log(`user created with id ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`updated user with id ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`removed user with id ${this.id}`);
  }
}
