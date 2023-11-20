import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { IPermission } from "@auth/modules/permission/interfaces/permission.interface";
import { PermissionOriginEnum } from "@auth/modules/permission/enum/permission-type.enum";
import { Role } from "@auth/modules/role/repositories/typeorm/role.entity";
import { CommonEntity } from "@app/shared/common.entity";

@Entity('permission')
export class Permission extends CommonEntity implements IPermission {
  @PrimaryColumn()
  permissionid: string;

  @Column({ type: 'text' })
  label: string;

  @Column({
    type: "enum",
    enum: PermissionOriginEnum,
  })
  type: PermissionOriginEnum;

  @ManyToMany(() => Role, role => role.permissions)
  roles?: Role[];
}
