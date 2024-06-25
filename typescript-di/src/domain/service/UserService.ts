import { User, UserRepository } from "../repository/UserRepository";
import { CircularService } from "./CircularService";


export class UserService {

  constructor(private userRepository: UserRepository, private circularService: CircularService) {

  }

  public findUser(id: number): User {
    return this.userRepository.find(id)
  }
}