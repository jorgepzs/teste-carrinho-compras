import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { ShoppingCart } from "./ShoppingCart";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.client_id)
  ShoppingCarts: ShoppingCart[];
}
