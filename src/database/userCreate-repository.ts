export interface UserCreateData {
  name: string;
  email: string;
  password: string;
  adress_city: string;
  adress_state: string;
}

export interface UserCreateRepository {
  create: (data: UserCreateData) => Promise<void>;
}
