import { JWT_MODULE_CONFIG } from '@app/shared/constants';
import { JwtConfigInterface } from '@app/shared/interfaces';
import { registerAs } from '@nestjs/config';

export const jwtConfig = registerAs(
  JWT_MODULE_CONFIG,
  (): JwtConfigInterface => ({
    secret: process.env.JWT_SECRET,
    access: {
      signOptions: {
        expiresIn: process.env.JWT_ACCESS_EXPIRES,
      },
    },
    refresh: {
      signOptions: {
        expiresIn: process.env.JWT_REFRESH_EXPIRES,
      },
    },
  })
);
