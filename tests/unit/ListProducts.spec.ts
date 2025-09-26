import { Mocked } from "vitest";
import { ListProducts } from "~/modules/products/application/ListProducts";
import { Product } from "~/modules/products/domain/Product";
import { ProductRepository } from "~/modules/products/domain/ProductRepository";

describe("ListProducts unit tests", () => {
  let sut: ListProducts;
  let repository: Mocked<ProductRepository>;

  beforeAll(() => {
    repository = { save: vi.fn(), all: vi.fn() };
    sut = new ListProducts(repository);
  });

  it("should be able to list credentials", async () => {
    repository.all.mockImplementation(async () => [
      Product.create({
        address: "https://www.google.com",
        description: "description",
        cover: new File([""], "filename"),
        name: "name",
      })
    ]);
    const result = await sut.execute();
    expect(result).toHaveLength(1);
  });
});
