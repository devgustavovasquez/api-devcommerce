import { UserCreateRepository } from '../database/userCreate-repository';

interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
  adress_city: string;
  adress_state: string;
}

export class UserCreate {
  constructor(private userCreateRepository: UserCreateRepository) {}

  async execute(request: UserCreateRequest) {
    const { name, email, password, adress_city, adress_state } = request;

    await this.userCreateRepository.create({
      name,
      email,
      password,
      adress_city,
      adress_state,
    });
  }
}
