import { ProductCreateRepository } from '../database/productCreate-repository';

interface ProductCreateRequest {
  title: string;
  amount: number;
  price: number;
  authorId: string;
  cep: number;
  photos: object;
}

export class ProductCreate {
  constructor(private productCreateRespository: ProductCreateRepository) {}

  async execute(request: ProductCreateRequest) {
    const { title, amount, price, authorId, cep, photos } = request;

    await this.productCreateRespository.create({
      title,
      amount,
      price,
      authorId,
      cep,
      photos,
    });
  }
}
