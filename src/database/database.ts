import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import * as dotenv from "dotenv";

const parentDir = join(__dirname, '..');
dotenv.config();

const connectionOpts: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'typescript-koa',
  entities: [
    `${parentDir}/**/*.entity.ts`,
  ],
  synchronize: true,
};

const connection = new DataSource(connectionOpts);

export default connection;