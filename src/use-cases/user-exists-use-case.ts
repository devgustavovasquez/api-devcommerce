import { UserExistsRepository } from '../database/userExists-repository';

interface UserExistsRequest {
  name: string;
  email: string;
}

export class UserExists {
  constructor(private userExistsRepository: UserExistsRepository) {}

  async execute(request: UserExistsRequest) {
    const { name, email } = request;

    return await this.userExistsRepository.verify({
      name,
      email,
    });
  }
}
