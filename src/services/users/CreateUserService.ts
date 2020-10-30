import AppError from '@errors/AppError';
import User from '@database/entities/User';
import IUsersRepository from '@database/repositories/users/models/IUsersRepository';
import IHashProvider from '@container/providers/HashProvider/models/IHashProvider';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    username,
    email,
    password,
  }: IRequest): Promise<User> {
    const checkUsernameExists = await this.usersRepository.findByUsername(
      username,
    );

    if (checkUsernameExists) {
      throw new AppError('Username already used.');
    }

    const checkEmailExists = await this.usersRepository.findByEmail(email);

    if (checkEmailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = this.usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
