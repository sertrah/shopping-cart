import { FC, MouseEvent } from "react";

import FloatButton from "presentation-layer/components/Button/FloatButton";
import { useShoppingCartContext } from "application/context/ShoppingCart";
import { IShoppingitem } from "application/models/shoppingCart";
import "./style.scss";

const parentClass = "cart-card";
interface ICartCardProps extends IShoppingitem{
  index: number
}
const CartCard:FC<{ shoppingItem: ICartCardProps}> = ({shoppingItem}) => {
  const { removeProductByIndex, addProductByIndex  } = useShoppingCartContext();

  return (
    <article className={parentClass} >
      <img
        src={process.env.REACT_APP_CDN+shoppingItem.imageUrl}
        alt={shoppingItem.name}
        className={`${parentClass}__image`}
      />
      <h3 className={`${parentClass}__title`}>{shoppingItem.name}</h3>
      <div className={`${parentClass}__action`}>
        <p className={`${parentClass}__price`}>$ {shoppingItem.price}</p>
        <div  className={`${parentClass}__btns`}>
          <FloatButton className={`${parentClass}__btn`} icon="RemoveIcon" onClick={(e: MouseEvent<HTMLElement>)=> {
            removeProductByIndex(shoppingItem.index)}} />
          {shoppingItem.quantity}
          <FloatButton className={`${parentClass}__btn`} icon="AddIcon" onClick={()=> addProductByIndex(shoppingItem.index)} />
        </div>
      </div>
    </article>
  );
};

export default CartCard;
