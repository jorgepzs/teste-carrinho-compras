import { hash } from "bcryptjs";
import { ClientRepository } from "../repositories/ClientRepository";
export class ClientService {
  async execute({ username, password }) {
    try {
      const verifyAlredyInUse = await ClientRepository.findOneBy({
        username: username.replace(/\s/g, ""),
      });

      if (verifyAlredyInUse) {
        return new Error(`the username ${username} already in use `);
      }

      const trimUsername = username.replace(/\s/g, "");

      const trimPassword = password.replace(/\s/g, "");

      const hashPassword = await hash(trimPassword, 10);

      const newClient = ClientRepository.create({
        username: trimUsername,
        password: hashPassword,
      });

      if (!newClient) {
        return new Error("Registration Failed");
      }

      await ClientRepository.save(newClient);

      newClient.password = undefined;

      return newClient;
    } catch (error) {
      return console.log(error, "Registration Failed");
    }
  }
}
