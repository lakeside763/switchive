import { DataSource, DataSourceOptions } from "typeorm";
import { join } from "path";
import * as dotenv from 'dotenv';
import { Product } from "../src/product/product.entity";

dotenv.config({ path: '.env' })

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  entities: [Product],
  migrations: [join(__dirname, "./migrations/**/*.ts")],
  synchronize: false,
  logging: true,
  // ssl: {
  //   rejectUnauthorized: false
  // }
};

export const dataSource = new DataSource(dataSourceOptions);