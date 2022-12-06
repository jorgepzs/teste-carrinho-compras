import { ShoppingCart } from "./ShoppingCart";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  name: string;

  @Column({ type: "integer" })
  price: Number;
  value: any;
}
