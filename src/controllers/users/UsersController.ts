import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@services/users/CreateUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      username,
      email,
      password,
    });

    return res.json(classToClass(user));
  }
}
