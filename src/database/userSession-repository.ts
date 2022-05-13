export interface UserSessionData {
  email: string;
  password: string;
}

export interface UserSessionRepository {
  index: (data: UserSessionData) => Promise<void>;
}
