import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '@services/users/CreateUserService';
import CreateUserResolve from '@resolvers/users/CreateUserResolve';

export default class UsersController {
  private createUser: CreateUserService;

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password } = req.body;

    this.createUser = CreateUserResolve.resolve();

    const user = await this.createUser.execute({
      name,
      username,
      email,
      password,
    });

    return res.json(classToClass(user));
  }
}
