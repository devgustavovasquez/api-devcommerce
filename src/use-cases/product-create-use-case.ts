import { ProductCreateRepository } from '../database/productCreate-repository';

interface ProductCreateRequest {
  title: string;
  description: string;
  amount: number;
  price: number;
  authorId: string;
}

export class ProductCreate {
  constructor(private productCreateRespository: ProductCreateRepository) {}

  async execute(request: ProductCreateRequest) {
    const { title, description, amount, price, authorId } = request;

    console.log(request);

    await this.productCreateRespository.create({
      title,
      description,
      amount,
      price,
      authorId,
    });
  }
}
