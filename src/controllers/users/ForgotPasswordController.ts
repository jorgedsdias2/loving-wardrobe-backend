import { Request, Response } from 'express';

import SendForgotPasswordEmailService from '@services/users/SendForgotPasswordEmailService';

import EtherealMailProvider from '@providers/MailProvider/EtherealMailProvider';
import UsersRepository from '@database/repositories/users/UsersRepository';
import UserTokensRepository from '@database/repositories/users/UserTokensRepository';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      new UsersRepository(),
      new EtherealMailProvider(),
      new UserTokensRepository(),
    );

    await sendForgotPasswordEmailService.execute({
      email,
    });

    return res.status(204).json();
  }
}
