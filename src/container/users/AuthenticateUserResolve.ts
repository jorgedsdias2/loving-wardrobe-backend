import AuthenticateUserService from '@services/users/AuthenticateUserService';
import UsersRepository from '@database/repositories/users/UsersRepository';
import BCryptHashProvider from '@providers/HashProvider/BCryptHashProvider';

class AuthenticateUserResolve {
  public static resolve(): AuthenticateUserService {
    const authenticateUserService = new AuthenticateUserService(
      new UsersRepository(),
      new BCryptHashProvider(),
    );

    return authenticateUserService;
  }
}

export default AuthenticateUserResolve;
