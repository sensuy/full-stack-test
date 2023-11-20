import { IUser } from "@app/shared/interfaces";

export interface IUserLogin 
extends Pick<IUser, 'email' | 'password'> {}
