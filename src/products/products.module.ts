import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { User } from 'src/users/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Product, User])],
  providers: [ProductService],
  controllers: [ProductsController],
})
export class ProductsModule {}
