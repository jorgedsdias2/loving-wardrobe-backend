import { container } from 'tsyringe';

import '@container/providers';

import IUsersRepository from '@database/repositories/users/models/IUsersRepository';
import UsersRepository from '@database/repositories/users/UsersRepository';

import IUserTokensRepository from '@database/repositories/users/models/IUserTokensRepository';
import UserTokensRepository from '@database/repositories/users/UserTokensRepository';

import ICombosRepository from '@database/repositories/combos/models/ICombosRepository';
import CombosRepository from '@database/repositories/combos/CombosRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<ICombosRepository>(
  'CombosRepository',
  CombosRepository,
);
