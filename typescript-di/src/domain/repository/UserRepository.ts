

export type User = {
  name: string;
}

export interface UserRepository {
  find(id: number): User;
}
