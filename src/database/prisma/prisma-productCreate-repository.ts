import { prisma } from '../../prisma';
import {
  productCreateData,
  ProductCreateRepository,
} from '../productCreate-repository';

export class PrismaProductRepository implements ProductCreateRepository {
  async create({
    title,
    description,
    amount,
    price,
    authorId,
  }: productCreateData) {
    await prisma.product.create({
      data: {
        title,
        description,
        amount,
        price,
        authorId,
      },
    });
  }
}
