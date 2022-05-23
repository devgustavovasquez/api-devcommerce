import { Request, Response } from 'express';
import { PrismaProductByCepRepository } from '../database/prisma/prisma-productByCep-repository';
import { ProductByCep } from '../use-cases/product-by-cep-use-case';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cepPromise = require('cep-promise');
import { CEP } from 'cep-promise';
import fetch from 'node-fetch';

export class ProductByCepController {
  handle = async (req: Request, res: Response) => {
    const { cep } = req.body;

    const urlNominatim = 'https://nominatim.openstreetmap.org';

    /*     let logradouro,
      bairro,
      cidade,
      uf = '';

    const getAdreesCepPromise = async (cep: number) => {
      await cepPromise(cep).then((result: CEP) => {
        logradouro = result.street;
        bairro = result.neighborhood;
        cidade = result.city;
        uf = result.state;
      });
    };

    await getAdreesCepPromise(cep);
    console.log(logradouro, bairro, cidade, uf);
 */
    await fetch(
      urlNominatim + `/search?q=${cep}&countrycodes=br&format=json`,
    ).then((res) => console.log(res));

    /*     const latitude = parseFloat(resultNominatimJson[0].lat);
    const longitude = parseFloat(resultNominatimJson[0].lon);
 */
    const prismaProductByCepRepository = new PrismaProductByCepRepository();
    const productByCepUseCase = new ProductByCep(prismaProductByCepRepository);

    // await productByCepUseCase.execute({ cep });

    return res.status(201).send({});
  };
}
