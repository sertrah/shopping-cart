export enum Brand {
  Apple = "Apple",
  Cannon = "Cannon",
  Sony = "Sony",
  Logitech = "Logitech",
  Amazon = "Amazon",
}

export enum Category {
  Electronics = "Electronics",
}

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  description: string
  brand: Brand,
  category: Category,
  price: number,
  countInStock: number,
  rating: string,
  numReviews: number,
}

