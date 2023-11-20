import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "@app/shared/common.entity";
import { Auth } from "@auth/modules/auth/repositories/auth.entity";
import { IUser } from "@app/shared/interfaces";

@Entity('user')
export class User extends CommonEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  userid: string; 
  @Column({ type: 'text', nullable: false })
  username: string;
  @Column({ type: 'text', nullable: false })
  email: string; 
  @Column({ type: 'text', nullable: false })
  password: string;
  @Column({ type: 'text', nullable: false })
  salt: string;
  @OneToMany(() => Auth, auth => auth.user)
  authorizations?: Auth[];
}
