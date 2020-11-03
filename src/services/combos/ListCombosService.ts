import { injectable, inject } from 'tsyringe';

import AppError from '@errors/AppError';
import ICombosRepository from '@database/repositories/combos/models/ICombosRepository';
import Combo from '@database/entities/Combo';

@injectable()
class ListCombosService {
  constructor(
    @inject('CombosRepository')
    private combosRepository: ICombosRepository,
  ) {}

  public async execute(): Promise<Combo[]> {
    const combos = await this.combosRepository.findAll();

    if (combos.length === 0) {
      throw new AppError('Combos not found.');
    }

    return combos;
  }
}

export default ListCombosService;
