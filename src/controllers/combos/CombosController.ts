import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCombosService from '@services/combos/ListCombosService';

export default class CombosController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCombosService = container.resolve(ListCombosService);

    const combos = await listCombosService.execute();

    return res.json(combos);
  }
}
