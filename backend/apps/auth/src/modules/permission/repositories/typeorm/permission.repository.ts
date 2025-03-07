import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { IPermissionRepository } from "@auth/modules/permission/interfaces/permission-repository.interface";
import { Permission } from "./permission.entity";
import { CreatePermissionDto } from "@auth/modules/permission/dto/create-permission.dto";
import { PermissionOriginEnum } from "@auth/modules/permission/enum/permission-type.enum";
import { ListPermissionDto } from "@auth/modules/permission/dto/list-permission.dto";


export class PermissionRepository implements IPermissionRepository {
  constructor(
    @InjectRepository(Permission)
    private repository: Repository<Permission>
  ) { }

  create(data: CreatePermissionDto): Permission {
    return this.repository.create(data);
  }

  save(permission: Permission): Promise<Permission> {
    return this.repository.save(permission);
  }

  findOne(permissionid: string): Promise<Permission | null> {
    return this.repository.findOne({ where: { permissionid } });
  }

  listPermissionByType(type: PermissionOriginEnum): Promise<ListPermissionDto[]> {
    return this.repository.find({
      where: {
        type,
        active: true
      },
      select: ['permissionid', 'label'],
    });
  }

  findPermissionsByIds(permissionids: string[]): Promise<Permission[]> {
    return this.repository.find({
      where: { permissionid: In(permissionids) }
    });
  }


}