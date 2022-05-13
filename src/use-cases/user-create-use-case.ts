import { UserCreateRepository } from '../database/userCreate-repository';

interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
}

export class UserCreate {
  constructor(private userCreateRepository: UserCreateRepository) {}

  async execute(request: UserCreateRequest) {
    const { name, email, password } = request;

    await this.userCreateRepository.create({
      name,
      email,
      password,
    });
  }
}
