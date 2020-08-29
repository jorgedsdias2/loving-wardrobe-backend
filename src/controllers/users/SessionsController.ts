import { Request, Response } from 'express';

export default class SessionsController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'chamou funcao' });
  }
}
