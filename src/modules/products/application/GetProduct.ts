import { UseCase } from '~/modules/shared/application/UseCase';
import { ProductRepository } from '../domain/ProductRepository';
import { NotFoundError } from '~/modules/shared/application/NotFoundError';

export class GetProduct implements UseCase<Input, Promise<Output>> {
  constructor(private repository: ProductRepository) {}

  async execute(input: Input): Promise<Output> {
    const product = await this.repository.get(input.id);
    if (!product) throw new NotFoundError(`Product ${input.id} not found`);
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      address: product.address,
    };
  }
}

type Input = {
  id: string;
};

type Output = {
  id: string;
  name: string;
  description: string;
  address: string;
};
