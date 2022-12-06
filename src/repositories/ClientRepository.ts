import { Client } from "./../dataBase/entities/Client";
import { AppDataSource } from "./../dataBase/data-source";

export const ClientRepository = AppDataSource.getRepository(Client);
