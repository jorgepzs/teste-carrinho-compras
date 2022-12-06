import { ClientService } from "../services/ClientService";
import { Request, Response } from "express";

export class ClientController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const service = new ClientService();

      const client = await service.execute({
        username,
        password,
      });
      if (client instanceof Error) {
        return res.status(400).json(client.message);
      }
      return res
        .status(201)
        .json({ message: "your Account Created Sucessfull", client });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
