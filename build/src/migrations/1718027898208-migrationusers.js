"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrationusers1718027898208 = void 0;
const users_type_enum_1 = require("../users/entities/enum/users-type.enum");
const user_entity_1 = require("../users/entities/user.entity");
class Migrationusers1718027898208 {
    async up(run) {
        await run.manager.save(run.manager.create(user_entity_1.User, {
            Name: "Proftest",
            Lastname: "test",
            date_birthday: "01/01/1990",
            email: "test@gmail.com",
            password: "test",
            type: users_type_enum_1.UsersType.prof,
        }));
    }
    async down(queryRunner) {
    }
}
exports.Migrationusers1718027898208 = Migrationusers1718027898208;
//# sourceMappingURL=1718027898208-migrationusers.js.map