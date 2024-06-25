import { UserRepositoryProvider } from "../../infra/InfrastructureModule";
import { UserService } from "./UserService";

export class UserServiceProvider {
  public static get(): UserService {
    const userRepository = UserRepositoryProvider.get()
    return new UserService(userRepository)
  }
}