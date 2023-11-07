import { DataSource } from "typeorm";
import app from "./app/app";
import databaseConnection from "./database/database";
import * as dotenv from "dotenv";

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;

databaseConnection
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port \x1b[33m http://localhost:${PORT}\x1b[0m...`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
