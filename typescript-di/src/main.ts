import { UserService } from "./domain/service/UserService";
import { UserRepositoryProvider } from "./infra/InfrastructureModule";



const userService = new UserService(UserRepositoryProvider.get());

console.log(
  userService.findUser(0)
)