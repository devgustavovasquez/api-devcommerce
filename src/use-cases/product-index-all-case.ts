import { ProductIndexAllRepository } from '../database/productIndexAll-repository';

export class ProductIndexAll {
  constructor(private productIndexAllRepository: ProductIndexAllRepository) {}

  async execute() {
    const products = await this.productIndexAllRepository.index();

    return products;
  }
}
