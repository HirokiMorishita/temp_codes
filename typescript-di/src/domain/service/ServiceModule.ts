import { UserRepositoryProvider } from "../../infra/InfrastructureModule";
import { CircularService } from "./CircularService";
import { UserService } from "./UserService";

export class CircularServiceProvider {
  public static get(): CircularService {
    const userService = UserServiceProvider.get()
    return new CircularService(userService)
  }
}
export class UserServiceProvider {
  public static get(): UserService {
    const userRepository = UserRepositoryProvider.get()
    const circularService = CircularServiceProvider.get()
    return new UserService(userRepository, circularService)
  }
}