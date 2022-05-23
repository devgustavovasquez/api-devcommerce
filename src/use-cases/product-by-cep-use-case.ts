import { ProductByCepRepository } from '../database/productByCep-repository';

interface ProductByCepRequest {
  cep: number;
}

export class ProductByCep {
  constructor(private productByCepRepository: ProductByCepRepository) {}

  async execute(request: ProductByCepRequest) {
    const { cep } = request;

    await this.productByCepRepository.index({ cep });
  }
}
