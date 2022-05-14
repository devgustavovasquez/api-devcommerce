import { ProductCreateRepository } from '../database/productCreate-repository';

interface ProductCreateRequest {
  title: string;
  amount: number;
  price: number;
  authorId: string;
  cep: number;
}

export class ProductCreate {
  constructor(private productCreateRespository: ProductCreateRepository) {}

  async execute(request: ProductCreateRequest) {
    const { title, amount, price, authorId, cep } = request;

    await this.productCreateRespository.create({
      title,
      amount,
      price,
      authorId,
      cep,
    });
  }
}
