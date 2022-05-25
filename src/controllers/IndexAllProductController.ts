import { Request, Response } from 'express';
import { PrismaProductAllsRepository } from '../database/prisma/prisma-productIndexAll-repository';
import { ProductIndexAll } from '../use-cases/product-index-all-case';

export class IndexAllProductsController {
  handle = async (req: Request, res: Response) => {
    const prismaProductAllsRepository = new PrismaProductAllsRepository();
    const productIndexAllUseCase = new ProductIndexAll(
      prismaProductAllsRepository,
    );

    const products = await productIndexAllUseCase.execute();

    if (products == undefined) {
      return res.status(403).send();
    }

    return res.status(200).send(products);
  };
}
