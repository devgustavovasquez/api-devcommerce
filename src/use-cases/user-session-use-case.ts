import { UserSessionRepository } from '../database/userSession-repository';

interface UserSessionRequest {
  email: string;
  password: string;
}

export class UserSession {
  constructor(private userSessionRepository: UserSessionRepository) {}

  async execute(request: UserSessionRequest) {
    const { email, password } = request;

    await this.userSessionRepository.index({
      email,
      password,
    });
  }
}
