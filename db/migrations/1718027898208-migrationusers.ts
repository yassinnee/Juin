import { MigrationInterface, QueryRunner } from "typeorm";
import { UsersType } from "src/users/entities/enum/users-type.enum";
import { User } from "src/users/entities/user.entity";

export class Migrationusers1718027898208 implements MigrationInterface {

    public async up(run: QueryRunner): Promise<void> {
        await run.manager.save(run.manager.create(User, {
            Name: "Proftest",
            Lastname: "test",
            date_birthday : "01/01/1990",
            email : "test@gmail.com" ,
            password : "test", 
            type: UsersType.prof,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}

