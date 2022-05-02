import { IProduct } from "application/models/product";

interface IShoppingitem {
  id: string;
  quantity: number;
  name: string;
  price: number;
  imageUrl: string;
}
interface IShoppingCart {
  products?: IShoppingitem[];
  totalProducts: number;
}

interface IShopingCartContext extends IShoppingCart {
  addProduct: (r: IProduct) => void;
  removeProductByIndex: (index: number) => void;
  addProductByIndex: (index: number) => void;
}

export type {
  IShoppingitem,
  IShoppingCart,
  IShopingCartContext
}