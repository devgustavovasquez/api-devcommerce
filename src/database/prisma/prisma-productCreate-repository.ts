import { prisma } from '../../prisma';
import {
  productCreateData,
  ProductCreateRepository,
} from '../productCreate-repository';

export class PrismaProductRepository implements ProductCreateRepository {
  async create({
    title,
    amount,
    price,
    authorId,
    cep,
    photos,
  }: productCreateData) {
    await prisma.product.create({
      data: {
        title,
        amount,
        price,
        authorId,
        cep,
        photos,
      },
    });
  }
}
