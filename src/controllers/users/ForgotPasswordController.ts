import { Request, Response } from 'express';

import SendForgotPasswordEmailService from '@services/users/SendForgotPasswordEmailService';
import SendForgotPasswordEmailResolve from '@resolvers/users/SendForgotPasswordEmailResolve';

export default class ForgotPasswordController {
  private sendForgotPasswordEmailService: SendForgotPasswordEmailService;

  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    this.sendForgotPasswordEmailService = SendForgotPasswordEmailResolve.resolve();

    await this.sendForgotPasswordEmailService.execute({
      email,
    });

    return res.status(204).json();
  }
}
