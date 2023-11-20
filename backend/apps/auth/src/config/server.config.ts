import { SERVER_CONFIG } from '@app/shared/constants';
import { ServerConfigInterface } from '@app/shared/interfaces';
import { registerAs } from '@nestjs/config';

export const serverConfig = registerAs(
  SERVER_CONFIG,
  (): ServerConfigInterface => ({
    environment: process.env?.NODE_ENV ?? 'development',
    port: 
      process.env.PORT ? Number(process.env.PORT) : 3000,
  })
);