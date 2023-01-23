import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import * as swaggerUi from 'swagger-ui-express'
import * as swaggerFile from '../build/swagger.json'
import cors from "cors";
import { RegisterRoutes } from "../build/routes";
var morgan = require("morgan");

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:8080" }));
app.use(morgan("dev"));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

RegisterRoutes(app)

/* Create connection with database */
createConnection()
  .then(async (connection) => {
    // await connection.runMigrations();

    app.listen(port, function () {
      console.log(`App is listening on port http://localhost:${port} !`);
    });
  })
  .catch((error) => console.log(error));