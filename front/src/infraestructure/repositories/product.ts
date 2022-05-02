import { http } from "infraestructure/http";
import { ProductDTO } from "infraestructure/http/dto/productDTO";
import { IProduct } from "application/models/product";
import { productDTOMapper } from "infraestructure/helpers/mappers";

export const productRepository = {
  getById: async (id: string): Promise<IProduct> => {
    return await http
      .get<ProductDTO>(`products/${id}`)
      .then((ProductDTO: ProductDTO) =>  productDTOMapper(ProductDTO));
  },
  getAll: async (): Promise<IProduct[]> => {
    return await http
      .get<ProductDTO[]>(`products`)
      .then((productDTO: ProductDTO[]) => productDTO.map(productDTOMapper));
  },
};
