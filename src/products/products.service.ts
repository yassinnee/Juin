import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { User } from 'src/users/entities/user.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const user = await this.userRepository.findOne({ where: { id: createProductDto.idUsers } });
    if (!user) {
      throw new Error('User not found');
    }
    const product = new Product();
    product.idUsers = createProductDto.idUsers;
    product.name = createProductDto.name;
    product.Date_cours = createProductDto.Date_cours;
    product.desc = createProductDto.desc;
    product.picturs = createProductDto.picturs;
    product.create_date = createProductDto.create_date;

    return this.productRepository.save(product);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
