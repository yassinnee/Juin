import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    signUp(createUserDto: CreateUserDto): Promise<any>;
}
