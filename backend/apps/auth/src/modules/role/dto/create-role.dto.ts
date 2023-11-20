
import { IntersectionType, OmitType, PartialType, PickType } from "@nestjs/swagger";
import { RoleDto } from "./role.dto";
import { ICreateRoleResponse, IRoleCreatable } from "../interfaces";

export class CreateRoleDto extends IntersectionType(
  PickType(RoleDto, ['name']),
  PartialType(PickType(RoleDto, ['franchiseid', 'schoolid'])),
) implements IRoleCreatable {}


export class CreateRoleResponseDto extends IntersectionType(
  OmitType(RoleDto, ['updatedAt']),
) implements ICreateRoleResponse {}