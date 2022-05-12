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

    if (!name) {
      throw new Error('Name is required.');
    }

    if (!email) {
      throw new Error('Email is required.');
    }

    if (!password) {
      throw new Error('Password is required.');
    }

    await this.userCreateReposiwtory.create({
      name,
      email,
      password,
    });
  }
}
