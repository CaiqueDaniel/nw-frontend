export interface ProductCheckoutService {
  createCheckoutURLForProduct(productId: string): Promise<string>;
}
