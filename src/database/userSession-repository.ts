export interface UserSessionData {
  email: string;
}

interface UserSessionResponse {
  id: string;
  password: string;
}

export interface UserSessionRepository {
  index: (data: UserSessionData) => Promise<UserSessionResponse | void>;
}
