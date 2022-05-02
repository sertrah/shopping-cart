import { productRepository } from "infraestructure/repositories/product";

export const productService = {
  getById: (productId: string) => {
    return productRepository.getById(productId);
  },
  getAll: () => {
    return productRepository.getAll();
  },
};