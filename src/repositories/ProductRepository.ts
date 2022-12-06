import { Product } from "./../dataBase/entities/Product";
import { AppDataSource } from "./../dataBase/data-source";

export const ProductRepository = AppDataSource.getRepository(Product);
