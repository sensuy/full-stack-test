import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../repositories/typeorm/user.entity";


export interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(userid: string): Promise<User | null>;
}