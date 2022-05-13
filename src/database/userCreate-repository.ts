export interface UserCreateData {
  name: string;
  email: string;
  password: string;
  cep: number;
}

export interface UserCreateRepository {
  create: (data: UserCreateData) => Promise<void>;
}
