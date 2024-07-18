import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

dotenv.config();

console.log(process.env.DB_HOST)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      entities: [Product],
      migrations: [join(__dirname, "./../db/migrations/**/*.ts")],
      synchronize: false,
      logging: true,
      // ssl: {
      //   rejectUnauthorized: false
      // }
    }),
    TypeOrmModule.forFeature([Product]),
    ProductModule
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
