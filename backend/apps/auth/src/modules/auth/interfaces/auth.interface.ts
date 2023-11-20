import { ICommonEntity } from "@app/shared/interfaces";
import { Role } from "@auth/modules/role/repositories/typeorm/role.entity";
import { User } from "@auth/modules/user/repositories/typeorm/user.entity";

export interface IAuth extends ICommonEntity {
  authid: number;
  franchiseid: string;
  schoolid: string;
  user: User;
  role: Role;
}