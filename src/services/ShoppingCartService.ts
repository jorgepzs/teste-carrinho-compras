import { ClientRepository } from "../repositories/ClientRepository";
import { ProductRepository } from "../repositories/ProductRepository";
import { ShoppingCartRepository } from "../repositories/ShoppingCartRepository";

export class ShoppingCartService {
  async execute({ username, itens }) {
    if (!username) {
      return new Error("The username cannot be empty");
    }
    if (!itens) {
      return new Error("The itens cannot be empty");
    }
    const getClient = await ClientRepository.findOneBy({
      username: username,
    });
    if (!getClient) {
      return Error("User Not Found");
    }
    var valuesCart = [];
    let totalValueCart = 0;
    let products = [];

    for (let i = 0; itens.length > i; i++) {
      const queryVerifyExistsProduct = await ProductRepository.findOneBy({
        name: itens[i],
      });
      let unitPrice = queryVerifyExistsProduct.price;

      valuesCart.push(unitPrice);
      products.push(queryVerifyExistsProduct);
      if (!queryVerifyExistsProduct) {
        return new Error(`The Product ${itens[i]} Not found`);
      }
    }
    for (let i = 0; i < valuesCart.length; i++) {
      totalValueCart += valuesCart[i];
    }

    const newShoppingCart = ShoppingCartRepository.create({
      total: totalValueCart,
      client_id: getClient,
      itens: products,
    });

    if (!newShoppingCart) {
      return new Error("Product Registration Failed");
    }

    await ShoppingCartRepository.save(newShoppingCart);
    {
      return { newShoppingCart };
    }
  }
}
