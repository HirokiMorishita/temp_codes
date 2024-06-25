import { UserRepository } from "../domain/repository/UserRepository";
import { UserRepositoryImpl } from "./repository/UserRepositoryImpl";

export class UserRepositoryProvider {
  public static get(): UserRepository {
    return new UserRepositoryImpl()
  }
}
