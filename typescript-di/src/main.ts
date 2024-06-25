import { CircularServiceProvider, UserServiceProvider } from "./domain/service/ServiceModule";
import { UserService } from "./domain/service/UserService";
import { UserRepositoryProvider } from "./infra/InfrastructureModule";



const userService = UserServiceProvider.get()

console.log(
  userService.findUser(0)
)