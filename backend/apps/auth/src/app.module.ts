import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { ProviderModule } from './providers/provider.module';
import { jwtConfig } from '@auth/config/jwt.config';
import { UserModule } from '@auth/modules/user/user.module';
import { AuthModule } from '@auth/modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`apps/auth/.env.${process.env.NODE_ENV}`],
      load: [typeormConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: async (config: ConfigType<typeof typeormConfig>) => config,
    }),
    ProviderModule,
    AuthModule,
    UserModule,
    RoleModule,
    PermissionModule
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
