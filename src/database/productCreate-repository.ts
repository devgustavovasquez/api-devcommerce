export interface productCreateData {
  title: string;
  amount: number;
  price: number;
  authorId: string;
  cep: number;
}

export interface ProductCreateRepository {
  create: (data: productCreateData) => Promise<void>;
}
