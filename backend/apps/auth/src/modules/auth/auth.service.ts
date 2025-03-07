import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConfig } from "@auth/config/jwt.config";
import { ConfigType } from "@nestjs/config";
import { AuthResponseDto } from "./dto/auth-response.dto";
import { JwtPayload } from "./interfaces/jwt-payload.interface";
import { UserService } from "@auth/modules/user/user.service";
import { RefreshTokenResponseDto } from "./dto/refresh-token.dto";
import { IUser } from "@app/shared/interfaces";
import { UserDto } from "@app/shared/dto";

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>
  ) { }

  async validateUser(email: string, password: string): Promise<UserDto> {
    return this.userService.validateUserLogin(email, password);
  }

  async jwtSign(user: IUser): Promise<AuthResponseDto> {
    const accessConfig = this.config.access;
    const refreshConfig = this.config.refresh;

    const payload: JwtPayload = { sub: user.userid };

    const accessToken = this.jwtService.sign(
      payload,
      accessConfig?.signOptions
    );

    const refreshToken = this.jwtService.sign(
      payload,
      refreshConfig?.signOptions
    );

    const tokens: AuthResponseDto = {
      accessToken,
      refreshToken
    };

    return tokens;
  }

  async jwtRefresh(refreshToken: string): Promise<RefreshTokenResponseDto> {
    const refreshConfig = this.config.refresh;
    let verified: JwtPayload;
    try {
      verified = await this.jwtService.verifyAsync<JwtPayload>(
        refreshToken,
        refreshConfig?.verifyOptions
      );
    } catch (error) {
      throw new UnauthorizedException(`refresh token ${error.message}`);
    }

    const id = verified.sub;
    const user = await this.userService.findById(id);
    const { accessToken } = await this.jwtSign(user);
    return { accessToken }
  }
}