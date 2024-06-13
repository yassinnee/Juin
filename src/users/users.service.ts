import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

  @Injectable()
  export class UsersService {
    constructor(
      @InjectRepository(User) 
      private readonly data: Repository<User>, 
    ) {}

    async create(dto: CreateUserDto): Promise<User> {
      try {
        return await this.data.save(dto);
      } catch (e) {
        throw new ConflictException();
      }
    }

    async findAll(): Promise<User[]> {
      return await this.data.find();
    }
  
    async findOne(id: number): Promise<User> {
      const found = await this.data.findOneBy({id});
      if (!found) {
        throw new NotFoundException();
      }
      return found;
    }


    async update(id: number, dto: UpdateUserDto): Promise<User> {
      try {
        const done = await this.data.update(id, dto);
        if (done.affected !== 1) {
          throw new NotFoundException();
        }
      } catch (e) {
        throw new ConflictException();
      }
      return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
      const done = await this.data.delete(id);
      if (done.affected !== 1) {
        throw new NotFoundException();
      }
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
      return this.data.findOne({ where: { email } });
    }
    
  }






