import { FC } from "react";
import { useShoppingCartContext } from "application/context/ShoppingCart";
import CartCard from "./CartCard";
import SummaryCard from "./SummaryCard";

const parentClass = "cart"
const Cart: FC<{ className: string }> = ({ className }) => {
  const { products  } = useShoppingCartContext();
  return <div className={parentClass}>
    <div className={`${parentClass}__items`}>
    {products?.map((shoppingItem, index)=> <CartCard shoppingItem={{...shoppingItem, index}} />)}

    </div>
  {products && <SummaryCard shoppingItems={products}/>}
  </div>;
};

export default Cart;
