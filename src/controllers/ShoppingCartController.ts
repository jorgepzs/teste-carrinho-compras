import { Request, Response } from "express";
import { ShoppingCartService } from "../services/ShoppingCartService";
export class ShoppingCartController {
  async create(req: Request, res: Response) {
    const { itens, username } = req.body;
    try {
      const service = new ShoppingCartService();

      const shoppingCart = await service.execute({ itens, username });

      if (shoppingCart instanceof Error) {
        return res.status(400).json(shoppingCart.message);
      }

      return res
        .status(201)
        .json({ message: "your cart Registred Sucessfull", shoppingCart });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
