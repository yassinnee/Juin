import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<any> {

    // Créer un nouvel utilisateus
    const newUser = this.userRepository.create({
      Name: createUserDto.name,
      Lastname: createUserDto.lastname,
      date_birthday : createUserDto.date_birthday,
      email: createUserDto.email,
      password: createUserDto.password,
      Type : createUserDto.type,
    });

    // Enregistrer l'utilisateur dans la base de données
    await this.userRepository.save(newUser);

    return { message: 'User registered successfully' };
  }
}
