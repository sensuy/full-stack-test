import { ApiProperty } from "@nestjs/swagger";
import { IException } from "../../interfaces";


export class GoneDto implements IException {
  @ApiProperty()
  message: string;
  @ApiProperty({
    example: 410
  })
  statusCode: number;
  @ApiProperty({
    example: 'Inactive Object'
  })
  error: string;
}