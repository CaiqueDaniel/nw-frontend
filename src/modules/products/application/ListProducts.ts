import { UseCase } from "../../shared/application/UseCase";
import { ProductRepository } from "../domain/ProductRepository";

export class ListProducts implements UseCase<void, Promise<ListProductsOutput>> {
  constructor(private readonly repository: ProductRepository) { }

  async execute(): Promise<ListProductsOutput> {
    return (await this.repository.all()).map((item) => {
      return { ...item };
    });
  }
}

export type ListProductsOutput = {
  id: string;
  name: string;
  description: string;
  address: string;
  imageCover: string;
}[];
