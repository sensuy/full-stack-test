import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { User } from "@auth/modules/user/repositories/typeorm/user.entity";
import { Role } from "@auth/modules/role/repositories/typeorm/role.entity";
import { Permission } from "@auth/modules/permission/repositories/typeorm/permission.entity";
import { Auth } from "@auth/modules/auth/repositories/auth.entity";

config();


export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  logging: ['error', 'warn', 'info'],
  synchronize: false,
  logger: 'advanced-console',
  name: 'default',
  entities: [User, Role, Permission, Auth],
  migrations: ['dist/apps/auth/src/utils/migrations/*{.ts,.js}']
});