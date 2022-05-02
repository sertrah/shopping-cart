import Products from "presentation-layer/pages/Products";
import DetailProduct from "presentation-layer/pages/Products/Detail";
import ShoppingCart from "presentation-layer/pages/Products/Cart";
import { RouterPathList } from "./models/commonts"

interface IRoute{
  path: RouterPathList,
  component: React.FunctionComponent<any>
}

const routes: IRoute[] = [
  {
    path: RouterPathList.default,
    component: Products,
  },
  {
    path: RouterPathList.product,
    component: Products,
  },
  {
    path: RouterPathList.shoppingCart,
    component: ShoppingCart,
  },
  {
    path: RouterPathList.detailProduct,
    component: DetailProduct,
  }
];

export default routes;