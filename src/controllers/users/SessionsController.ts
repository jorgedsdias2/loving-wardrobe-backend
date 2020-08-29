import { Request, Response } from 'express';

import UsersRepository from '../../database/repositories/users/UsersRepository';

export default class SessionsController {
  usersRepository = new UsersRepository();

  public async index(req: Request, res: Response): Promise<Response> {
    await this.usersRepository.create({
      username: 'Jorge Dias',
      email: 'jorgedsdias4@gmail.com',
      password: '123456',
    });

    return res.json({ message: 'chamou funcao' });
  }
}
