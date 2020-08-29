import { Request, Response } from 'express';

import UsersRepository from '../../database/repositories/users/UsersRepository';

export default class SessionsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    usersRepository.create({
      username: 'Jorge Dias',
      email: 'jorge.dias@gmail.com',
      password: '123456',
    });

    return res.json({ message: 'chamou funcao' });
  }
}
