import { ProductDTO } from "infraestructure/http/dto/productDTO";
import { IProduct } from "application/models/product";

export const productDTOMapper = (productDTO: ProductDTO): IProduct => ({
  id: productDTO._id,
  name: productDTO.name,
  imageUrl: productDTO.image,
  description: productDTO.description,
  brand: productDTO.brand,
  category: productDTO.category,
  price: productDTO.price,
  countInStock: productDTO.countInStock,
  rating: `${productDTO.rating}`,
  numReviews: productDTO.numReviews,
});