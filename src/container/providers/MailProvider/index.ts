import { container } from 'tsyringe';

import IMailProvider from '@container/providers/MailProvider/models/IMailProvider';
import EtherealMailProvider from '@container/providers/MailProvider/EtherealMailProvider';

container.registerSingleton<IMailProvider>(
  'MailProvider',
  EtherealMailProvider,
);
