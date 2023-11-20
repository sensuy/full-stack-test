import {  Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '@app/shared/dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<UserDto> {
    return this.authService.validateUser(email, password);
  }
}
