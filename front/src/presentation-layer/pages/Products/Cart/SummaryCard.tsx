import { FC, useMemo } from "react";
import Button from "presentation-layer/components/Button/Button";
import { IShoppingitem } from "application/models/shoppingCart";

import "./style.scss";

const parentClass = "summary-card";
const SummaryCard: FC<{shoppingItems: IShoppingitem[]}> = ({ shoppingItems }) => {
  const calcSubTotal = useMemo(()=> shoppingItems.reduce((prev, current)=> prev + (current.price * current.quantity) ,0).toFixed(2), [shoppingItems])
  return (
    <div className={parentClass}>
      <h3  className={`${parentClass}__title`}>Resumen del pedido</h3>
      <ul  className={`${parentClass}__items`}>
        <li  className={`${parentClass}__item`}>
          <p>subtotal</p>
          <p>{calcSubTotal}</p>
        </li>
        <li className={`${parentClass}__item`}>
          <p>Envío</p>
          <p>Envío gratis</p>
        </li>
      </ul>
      <Button className={`${parentClass}__btn`}>
        Procesar compra
      </Button>
    </div>
  );
};

export default SummaryCard;
