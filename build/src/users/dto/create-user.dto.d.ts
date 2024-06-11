import { UsersType } from "../entities/enum/users-type.enum";
export declare class CreateUserDto {
    name: string;
    lastname: string;
    date_birthday: Date;
    email: string;
    password: string;
    type: UsersType;
}
