import { ApiProperty } from "@nestjs/swagger";
import { IException } from "../../interfaces";

export class ForbiddenDto implements IException {
  @ApiProperty()
  message: string;
  @ApiProperty({
    example: 403
  })
  statusCode: number;
  @ApiProperty({
    example: 'Forbidden'
  })
  error: string;
}