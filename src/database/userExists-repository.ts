export interface UserExistsData {
  name: string;
  email: string;
}

interface UserExistsResponse {
  name: boolean;
  email: boolean;
}

export interface UserExistsRepository {
  verify: (data: UserExistsData) => Promise<UserExistsResponse | null>;
}
