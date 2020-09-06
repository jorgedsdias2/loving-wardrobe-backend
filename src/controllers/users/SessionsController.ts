import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '@services/users/AuthenticateUserService';
import AuthenticateUserResolve from '@container/users/AuthenticateUserResolve';

export default class SessionsController {
  private authenticateUserService: AuthenticateUserService;

  public async create(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    this.authenticateUserService = AuthenticateUserResolve.resolve();

    const { user, token } = await this.authenticateUserService.execute({
      username,
      password,
    });

    return res.json({ user: classToClass(user), token });
  }
}
