export interface UserCreateData {
  name: string;
  email: string;
  password: string;
}

export interface UserCreateRepository {
  create: (data: UserCreateData) => Promise<void>;
}
