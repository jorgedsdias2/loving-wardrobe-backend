import AppError from '@errors/AppError';
import IMailProvider from '@container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '@database/repositories/users/models/IUsersRepository';
import IUserTokensRepository from '@database/repositories/users/models/IUserTokensRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[Loving Wardrobe] Recuperação de senha',
      templateData: `Segue seu token: ${token}`,
    });
  }
}

export default SendForgotPasswordEmailService;
