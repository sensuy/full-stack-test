import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';

import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards
} from '@nestjs/common';

import { AuthResponseDto } from './dto/auth-response.dto';
import { AuthUser } from './decorators/auth-user.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ProfileResponseDto } from './dto/profile-response.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthService } from './auth.service';
import { RefreshTokenRequestDto, RefreshTokenResponseDto } from './dto/refresh-token.dto';
import { NotFoundDto, UnauthorizedDto } from '@app/shared/exceptions';
import { IUser } from '@app/shared/interfaces';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('login')
  @ApiOperation({
    summary: 'Login a user',
    description: 'Verify if a user exist and return a access and refresh token'
  })
  @ApiBody({ type: UserLoginDto })
  @ApiOkResponse({
    description: 'The user has been successfully logged in.',
    type: AuthResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Email or password invalid',
    type: UnauthorizedDto,
  })
  @ApiNotFoundResponse({
    description: 'email was not registered',
    type: NotFoundDto,
  })
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@AuthUser() user: IUser): Promise<AuthResponseDto> {
    return this.authService.jwtSign(user);
  }

  @Post('/refresh')
  @ApiOperation({
    summary: 'Refresh a user token',
    description: 'Verify if the refresh token is valid and return a new access token'
  })
  @ApiCreatedResponse({
    description: 'The access token has been successfully refreshed.',
    type: RefreshTokenResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Refresh token expired or invalid',
    type: UnauthorizedDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    type: NotFoundDto,
  })
  refresh(@Body() payload: RefreshTokenRequestDto): Promise<RefreshTokenResponseDto> {
    return this.authService.jwtRefresh(payload.refreshToken);
  }

  @Get('profile')
  @ApiOperation({
    summary: 'Refresh a user token',
    description: 'Verify if the refresh token is valid and return a new access token'
  })
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token',
    required: true,
  })
  @ApiOkResponse({
    type: ProfileResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Refresh token expired or invalid',
    type: UnauthorizedDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    type: NotFoundDto,
  })
  @UseGuards(JwtAuthGuard)
  getProfile(@AuthUser() user: ProfileResponseDto) {
    return user;
  }
}
