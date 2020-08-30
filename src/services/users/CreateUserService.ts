import AppError from '@errors/AppError';
import User from '@database/entities/User';
import IUsersRepository from '@database/repositories/users/models/IUsersRepository';
import IHashProvider from '@providers/hashProvider/models/IHashProvider';

interface IRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ username, email, password }: IRequest): Promise<User> {
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
      username,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
