import { ProductRepository } from "../repositories/ProductRepository";
export class ProductService {
  async create({ price, name }) {
    try {
      if (!name) {
        return new Error("The name cannot be empty");
      }
      if (!price) {
        return new Error("The price cannot be empty");
      }
      const verifyExistsProduct = await ProductRepository.findOneBy({
        name: name.replace(/\s/g, ""),
      });

      if (verifyExistsProduct) {
        return new Error(`the product ${name} already in registred`);
      }

      const trimname = name.replace(/\s/g, "");

      const newProduct = ProductRepository.create({
        name: trimname,
        price: price,
      });

      if (!newProduct) {
        return new Error("Product Registration Failed");
      }

      await ProductRepository.save(newProduct);

      return newProduct;
    } catch (error) {
      return console.log(error, "Product Registration  Failed");
    }
  }
  async update({ product, newPrice }) {
    try {
      if (!product) {
        return new Error("The product cannot be empty");
      }
      if (!newPrice) {
        return new Error("The newPrice cannot be empty");
      }
      if (newPrice <= 0) {
        return new Error("The newPrice cannot contain numbers less than zero ");
      }
      const verifyExistsProduct = await ProductRepository.findOneBy({
        name: product.replace(/\s/g, ""),
      });

      if (!verifyExistsProduct) {
        return new Error(`the product ${product}  is not registred`);
      }
      const updatePrice = await ProductRepository.update(
        verifyExistsProduct.id,
        {
          price: newPrice,
        }
      );

      if (!updatePrice) {
        return new Error("Internal Server Error");
      }

      return updatePrice;
    } catch (error) {
      return console.log(error, "Product Registration  Failed");
    }
  }
}
