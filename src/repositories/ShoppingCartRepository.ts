import { ShoppingCart } from "./../dataBase/entities/ShoppingCart";
import { AppDataSource } from "./../dataBase/data-source";

export const ShoppingCartRepository = AppDataSource.getRepository(ShoppingCart);
