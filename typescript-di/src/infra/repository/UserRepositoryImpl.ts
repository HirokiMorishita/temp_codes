import { User, UserRepository } from "../../domain/repository/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  users: Array<User> = [
    {
      name: "test"
    },
    {
      name: "test2"
    }
  ]

  public find(id: number): User {
    return this.users[id]
  }
}