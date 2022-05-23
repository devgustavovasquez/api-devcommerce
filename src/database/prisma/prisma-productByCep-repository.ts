import { prisma } from '../../prisma';
import {
  productByCepData,
  ProductByCepRepository,
} from '../productByCep-repository';

export class PrismaProductByCepRepository implements ProductByCepRepository {
  async index({ cep }: productByCepData) {
    await prisma.product.findMany({
      where: {
        cep: {
          in: [cep],
        },
      },
    });
  }
}
