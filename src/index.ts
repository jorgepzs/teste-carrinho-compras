import express = require("express");
import { AppDataSource } from "./dataBase/data-source";
import routes from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    const port = process.env.PORT;

    app.use(express.json());

    app.use(routes);

    app.listen(port || 3000, () =>
      console.log(`Server is Running on port ${port || 3000}`)
    );
  })
  .catch((error) => console.log(error));
