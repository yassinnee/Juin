import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn} from 'typeorm';
import { UsersType } from "./enum/users-type.enum";

@Entity( {'name':'users'})
@Unique(['email'])
export class User {
    

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    Name : string;
  
    @Column()
    Lastname : string;

    @Column()
    date_birthday : Date;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column({type: "enum", enum: UsersType})
    Type : UsersType;

   /* @CreateDateColumn({ type: 'timestamp' })
    created_at: Date; */
}
