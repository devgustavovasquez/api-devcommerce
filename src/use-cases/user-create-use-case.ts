import { UserCreateRepository } from '../database/userCreate-repository';

interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
}

export class UserCreate {
  constructor(private userCreateReposiwtory: UserCreateRepository) {}

  async execute(request: UserCreateRequest) {
    const { name, email, password } = request;

    await this.userCreateReposiwtory.create({
      name,
      email,
      password,
    });
  }
}
