import { UserCreateRepository } from '../database/userCreate-repository';

interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
  cep: number;
}

export class UserCreate {
  constructor(private userCreateRepository: UserCreateRepository) {}

  async execute(request: UserCreateRequest) {
    const { name, email, password, cep } = request;

    await this.userCreateRepository.create({
      name,
      email,
      password,
      cep,
    });
  }
}
