import ICreateUserDTO from '@database/dtos/users/ICreateUserDTO';
import User from '@database/entities/User';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
