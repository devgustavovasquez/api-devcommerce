import { UserSessionRepository } from '../database/userSession-repository';

interface UserSessionRequest {
  email: string;
}

export class UserSession {
  constructor(private userSessionRepository: UserSessionRepository) {}

  async execute(request: UserSessionRequest) {
    const { email } = request;

    const user = await this.userSessionRepository.index({ email });

    return user;
  }
}
