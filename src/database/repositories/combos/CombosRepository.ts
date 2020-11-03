import { getRepository, Repository } from 'typeorm';

import Combo from '@database/entities/Combo';
import ICombosRepository from './models/ICombosRepository';

class CombosRepository implements ICombosRepository {
  private ormRepository: Repository<Combo>;

  constructor() {
    this.ormRepository = getRepository(Combo);
  }

  public async findAll(): Promise<Combo[] | []> {
    const combos = await this.ormRepository.find();

    return combos;
  }
}

export default CombosRepository;
