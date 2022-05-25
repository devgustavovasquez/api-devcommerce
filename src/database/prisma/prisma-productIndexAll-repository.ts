import { prisma } from '../../prisma';
import { ProductIndexAllRepository } from '../productIndexAll-repository';

export class PrismaProductAllsRepository implements ProductIndexAllRepository {
  async index() {
    const products = await prisma.product.findMany({
      where: {
        id: {
          not: undefined,
        },
      },
      select: {
        id: true,
        title: true,
        price: true,
        photos: {
          select: {
            url: true,
            alt_text: true,
          },
        },
        rating: true,
        rating_qty: true,
      },
    });

    if (products.length > 0) {
      return products;
    }
  }
}
