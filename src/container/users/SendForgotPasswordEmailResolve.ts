import EtherealMailProvider from '@providers/MailProvider/EtherealMailProvider';
import UsersRepository from '@database/repositories/users/UsersRepository';
import UserTokensRepository from '@database/repositories/users/UserTokensRepository';
import SendForgotPasswordEmailService from '@services/users/SendForgotPasswordEmailService';

class SendForgotPasswordEmailResolve {
  public static resolve(): SendForgotPasswordEmailService {
    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      new UsersRepository(),
      new EtherealMailProvider(),
      new UserTokensRepository(),
    );

    return sendForgotPasswordEmailService;
  }
}

export default SendForgotPasswordEmailResolve;
