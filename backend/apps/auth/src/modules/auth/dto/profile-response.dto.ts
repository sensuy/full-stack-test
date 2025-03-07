import { IntersectionType, OmitType } from "@nestjs/swagger";
import { IProfileResponse } from "../interfaces/profile-response.interface";
import { UserDto } from "@app/shared/dto";


export class ProfileResponseDto extends IntersectionType(
  OmitType(UserDto, ['password', 'updatedAt']),
) implements IProfileResponse {}