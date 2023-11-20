
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Auth } from '@auth/modules/auth/repositories/auth.entity';
import { Permission } from '@auth/modules/permission/repositories/typeorm/permission.entity';
import { Role } from '@auth/modules/role/repositories/typeorm/role.entity';
import { User } from '@auth/modules/user/repositories/typeorm/user.entity';
import { TYPEORM_MODULE_CONFIG } from '@app/shared/constants';


export const typeormConfig = registerAs(
  TYPEORM_MODULE_CONFIG,
  (): TypeOrmModuleOptions => {
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: [User, Role, Permission, Auth],
      migrations: ['dist/apps/auth/src/utils/migrations/*{.ts,.js}'],
      logging: ['error', 'warn'],
      synchronize: false
    };
  }
);
