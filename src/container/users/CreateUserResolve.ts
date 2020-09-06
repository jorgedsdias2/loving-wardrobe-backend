import CreateUserService from '@services/users/CreateUserService';
import UsersRepository from '@database/repositories/users/UsersRepository';
import BCryptHashProvider from '@providers/HashProvider/BCryptHashProvider';

class CreateUserResolve {
  public static resolve(): CreateUserService {
    const createUser = new CreateUserService(
      new UsersRepository(),
      new BCryptHashProvider(),
    );

    return createUser;
  }
}

export default CreateUserResolve;
