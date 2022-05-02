import {
  FC,
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { IProduct } from "application/models/product";
import {
  IShopingCartContext,
  IShoppingitem,
  IShoppingCart,
} from "application/models/shoppingCart";

const ShoppingCartContext = createContext<IShopingCartContext | undefined>(
  undefined
);
const { Provider } = ShoppingCartContext;

const getShopingItemIndex = (
  shoppingItems: IShoppingitem[],
  productId: string
): number => shoppingItems.findIndex((product) => product.id === productId);

const ShoppingCartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<IShoppingCart>({
    products: [],
    totalProducts: 0,
  });

  const addProduct = (product: IProduct) => {
    if (!value.products || value.products.length <= 0) {
      setValue({
        ...value,
        totalProducts: 1,
        products: [
          {
            id: product.id,
            quantity: 1,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
          },
        ],
      });
      return;
    }
    const shoppingItem = getShopingItemIndex(value.products, product.id);
    if (!(shoppingItem > -1)) {
      value.products.push({ ...product, quantity: 1 });
      setValue({ ...value, totalProducts: value.totalProducts + 1 });
      return;
    }
    value.products[shoppingItem] = {
      ...value.products[shoppingItem],
      quantity: value.products[shoppingItem]?.quantity + 1,
    };
    setValue({ ...value, totalProducts: value.totalProducts + 1 });
    return;
  };

  const addProductByIndex = (index: number) => {
    if (!value.products) {
      setValue(value);
      return;
    }
    value.products[index] = {
      ...value.products[index],
      quantity: value.products[index]?.quantity + 1,
    };
    setValue({ ...value, totalProducts: value.totalProducts + 1 });
    return;
  };
  const removeProductByIndex = (index: number) => {
    const indexToNumber = +index;
    if (!value.products) {
      setValue({ ...value });
      return;
    }
    const copy = { ...value.products[indexToNumber] };
    const quantity = copy?.quantity - 1;
    if (quantity <= 0 || isNaN(quantity)) {
      value.products.splice(indexToNumber, 1);
      setValue({ ...value, totalProducts: value.totalProducts - 1 });
      return;
    }
    value.products[indexToNumber] = {
      ...value.products[indexToNumber],
      quantity,
    };
    setValue({ ...value, totalProducts: value.totalProducts - 1 });
    return;
  };
  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("items");
    if (itemsFromStorage) {
      const parse = JSON.parse(itemsFromStorage);
      setValue(parse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(value));
  }, [value]);

  return (
    <Provider
      value={{ ...value, addProduct, removeProductByIndex, addProductByIndex }}
    >
      {children}
    </Provider>
  );
};

const useShoppingCartContext = (): IShopingCartContext => {
  const configState = useContext(ShoppingCartContext);
  if (configState === undefined) {
    throw new Error(
      "useShoppingCartContext must be called within ConfigProvider"
    );
  }
  return {
    ...configState,
  };
};

export { ShoppingCartProvider, useShoppingCartContext };
