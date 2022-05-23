export interface productCreateData {
  title: string;
  amount: number;
  price: number;
  authorId: string;
  photos: object;
}

export interface ProductCreateRepository {
  create: (data: productCreateData) => Promise<void>;
}
