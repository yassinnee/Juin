import { UsersType } from "./enum/users-type.enum";
export declare class User {
    id: number;
    Name: string;
    Lastname: string;
    date_birthday: Date;
    email: string;
    password: string;
    Type: UsersType;
    created_at: Date;
}
