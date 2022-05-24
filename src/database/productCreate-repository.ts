export interface productCreateData {
  title: string;
  description: string;
  amount: number;
  price: number;
  authorId: string;
}

export interface ProductCreateRepository {
  create: (data: productCreateData) => Promise<void>;
}
