import { Auth } from "@auth/modules/auth/repositories/auth.entity";
import { Permission } from "@auth/modules/permission/repositories/typeorm/permission.entity";
import { ICommonEntity } from "@app/shared/interfaces";

export interface IRole extends ICommonEntity {
  roleid: number;
  name: string;
  franchiseid?: string;
  schoolid?: string;
  permissions?: Permission[];
  authorizations?: Auth[];
}
  