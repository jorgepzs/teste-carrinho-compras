import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  async create(req: Request, res: Response) {
    const { name, price } = req.body;
    try {
      const service = new ProductService();

      const product = await service.create({
        name,
        price,
      });
      if (product instanceof Error) {
        return res.status(400).json(product.message);
      }
      return res
        .status(201)
        .json({ message: "your Product Registred Sucessfull", product });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async update(req: Request, res: Response) {
    const { product, newPrice } = req.body;
    try {
      const service = new ProductService();

      const updateProduct = await service.update({
        product,
        newPrice,
      });

      if (updateProduct instanceof Error) {
        return res.json(product.message);
      }

      return res.json({
        message: "your Product Updated Sucessfull",
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
