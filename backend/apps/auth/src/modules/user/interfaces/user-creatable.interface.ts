import { IUser } from "@app/shared/interfaces";


export interface IUserCreatable
extends Pick<
IUser, 
'username' | 'email' | 'password'
>,
Partial<Pick<IUser, 'active'>> {}
