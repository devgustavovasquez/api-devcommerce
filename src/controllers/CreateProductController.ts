import { Request, Response } from 'express';
import { PrismaProductRepository } from '../database/prisma/prisma-productCreate-repository';
import { ProductCreate } from '../use-cases/product-create-use-case';

export class CreateProductController {
  handle = async (req: Request, res: Response) => {
    const { title, description, amount, price } = req.body;
    const user_id = req.header('user_id');

    const prismaProductRepository = new PrismaProductRepository();
    const productCreateUseCase = new ProductCreate(prismaProductRepository);

    if (!user_id) {
      return res.status(403).send();
    }

    await productCreateUseCase.execute({
      title,
      description,
      amount,
      price,
      authorId: user_id,
    });

    return res.status(201).send();
  };
}
