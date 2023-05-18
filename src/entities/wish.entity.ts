import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("wishlist")
export class Wishlist {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean", default: false })
  bought: boolean;

  @Column({ type: "text" })
  url: string;

  @Column({ length: 32 })
  name: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
