import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '@services/users/CreateUserService';
import UsersRepository from '@database/repositories/users/UsersRepository';
import BCryptHashProvider from '@providers/HashProvider/BCryptHashProvider';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password } = req.body;

    const createUser = new CreateUserService(
      new UsersRepository(),
      new BCryptHashProvider(),
    );

    const user = await createUser.execute({
      name,
      username,
      email,
      password,
    });

    return res.json(classToClass(user));
  }
}
