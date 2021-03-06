import { prisma } from '../../prisma';
import { UserCreateData, UserCreateRepository } from '../userCreate-repository';

export class PrismaUserRepository implements UserCreateRepository {
  async create({
    name,
    email,
    password,
    adress_city,
    adress_state,
  }: UserCreateData) {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        adress_city,
        adress_state,
      },
    });
  }
}
