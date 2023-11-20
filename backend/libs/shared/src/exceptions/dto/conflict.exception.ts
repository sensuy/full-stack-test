import { ApiProperty } from "@nestjs/swagger";
import { IException } from "../../interfaces";

export class ConflictDto implements IException {
  @ApiProperty()
  message: string;
  @ApiProperty({
    example: 409
  })
  statusCode: number;
  @ApiProperty({
    example: 'Conflict'
  })
  error: string;
}