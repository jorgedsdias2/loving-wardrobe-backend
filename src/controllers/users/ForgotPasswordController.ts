import { Request, Response } from 'express';

import SendForgotPasswordEmailService from '@services/users/SendForgotPasswordEmailService';
import { container } from 'tsyringe';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPasswordEmailService = container.resolve(
      SendForgotPasswordEmailService,
    );

    await sendForgotPasswordEmailService.execute({
      email,
    });

    return res.status(204).json();
  }
}
