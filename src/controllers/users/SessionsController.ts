import { Request, Response } from 'express';

import AuthenticateUserService from '@services/users/AuthenticateUserService';
import UsersRepository from '@database/repositories/users/UsersRepository';
import BCryptHashProvider from '@providers/hashProvider/BCryptHashProvider';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const authenticateUserService = new AuthenticateUserService(
      new UsersRepository(),
      new BCryptHashProvider(),
    );

    const { user, token } = await authenticateUserService.execute({
      username,
      password,
    });

    return res.json({ user, token });
  }
}
