import { container } from 'tsyringe';

import IHashProvider from '@container/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@container/providers/HashProvider/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
