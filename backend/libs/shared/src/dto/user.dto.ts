import { ApiProperty } from "@nestjs/swagger";
import { IUser } from "../interfaces";
import { CommonEntityDto } from "./common-entity.dto";
import {
  PASSWORD_MIN_LENGTH,
  USER_EMAIL_MAX_LENGTH,
  USER_EMAIL_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_MIN_LENGTH
} from "../constants";


export class UserDto
  extends CommonEntityDto
  implements Omit<IUser, 'password' | 'salt'>
{
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    title: 'iduser',
    description: 'Unique identifier for the user',
  })
  userid: string;

  @ApiProperty({
    title: 'Username',
    description: 'The username of user.',
    minLength: USER_NAME_MIN_LENGTH,
    maxLength: USER_NAME_MAX_LENGTH,
    example: 'John Doe',
  })
  username: string;

  @ApiProperty({
    title: 'Email',
    description: 'The user\'s email.',
    minLength: USER_EMAIL_MIN_LENGTH,
    maxLength: USER_EMAIL_MAX_LENGTH,
    example: 'johndoe@test.com'
  })
  email: string;

  @ApiProperty({
    title: 'Password',
    description:
      'A Strong password that must contain at least one number, one capital letter and one lowercase letter',
    minLength: PASSWORD_MIN_LENGTH,
    example: 'Password123@',
  })
  password: string;
}