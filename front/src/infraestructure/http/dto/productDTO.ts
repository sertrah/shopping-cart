import { Brand, Category } from "application/models/product";

export interface ProductDTO {
  _id: string
  name: string
  image: string
  description: string
  brand: Brand,
  category: Category,
  price: number,
  countInStock: number,
  rating: number,
  numReviews: number,
}