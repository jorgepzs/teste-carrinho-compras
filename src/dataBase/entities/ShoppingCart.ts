import { Product } from "./Product";
import { Client } from "./Client";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";

@Entity("shopping_carts")
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "integer" })
  total: number;

  @ManyToMany(() => Product)
  @JoinTable()
  itens: Product[];

  @ManyToOne(() => Client, (client) => client.ShoppingCarts)
  @JoinColumn({ name: "client_id" })
  client_id: Client;
}
