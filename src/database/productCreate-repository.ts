export interface productCreateData {
  title: string;
  amount: number;
  price: number;
  authorId: string;
  cep: number;
  photos: object;
}

export interface ProductCreateRepository {
  create: (data: productCreateData) => Promise<void>;
}
