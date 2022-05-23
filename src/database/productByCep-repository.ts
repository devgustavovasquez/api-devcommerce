export interface productByCepData {
  cep: number;
}

export interface ProductByCepRepository {
  index: (cep: productByCepData) => Promise<void>;
}
