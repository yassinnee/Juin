import { MaxLength } from "class-validator";
import { UsersType } from "../entities/enum/users-type.enum";
import { IsNotEmpty, IsDefined, IsEmail, IsEnum , IsString} from 'class-validator';


export class CreateUserDto {

    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsNotEmpty()
    @MaxLength(100)
    lastname: string;

    @IsDefined()
    date_birthday: Date;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsDefined()
    @IsEnum(UsersType)
    type: UsersType;
}
