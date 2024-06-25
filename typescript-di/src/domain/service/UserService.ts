import { User, UserRepository } from "../repository/UserRepository";


export class UserService {

  constructor(private userRepository: UserRepository) {

  }

  public findUser(id: number): User {
    return this.userRepository.find(id)
  }
}