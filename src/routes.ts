import { ShoppingCartController } from "./controllers/ShoppingCartController";
import { ProductController } from "./controllers/ProductController";
import { verifyUsername } from "./middlewares/verifyUsername";
import { verifyPassword } from "./middlewares/verifyPassword";
import { ClientController } from "./controllers/ClientController";
import { Router } from "express";

const routes = Router();

routes.post(
  "/client",
  verifyPassword,
  verifyUsername,
  new ClientController().create
);
routes.post("/product", new ProductController().create);

routes.post("/cart", new ShoppingCartController().create);

routes.put("/product/updatePrice", new ProductController().update);

export default routes;
