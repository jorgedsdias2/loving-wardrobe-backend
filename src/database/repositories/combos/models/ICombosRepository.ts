import Combo from '@database/entities/Combo';

export default interface ICombosRepository {
  findAll(): Promise<Combo[] | []>;
}
