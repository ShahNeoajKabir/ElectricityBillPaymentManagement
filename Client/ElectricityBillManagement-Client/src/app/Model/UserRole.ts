import { Role } from "./Role";
import { User } from "./User";

export class UserRole{
    UserRoleId: number;
    RoleId: number;
    UserId: number;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    Status: number;
    Role: Role;
    User: User;

}