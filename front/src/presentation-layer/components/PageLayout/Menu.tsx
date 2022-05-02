import { MouseEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import FloatButton from "presentation-layer/components/Button/FloatButton";
import { useShoppingCartContext } from "application/context/ShoppingCart";
import { RouterPathList } from "application/models/commonts"

const parentClass = "menu";

const Menu = () => {
  const { totalProducts } = useShoppingCartContext();
  const history = useHistory();
  const handleUserClick = (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      history.push(`${RouterPathList.shoppingCart}`);
    };

  return (
    <nav className={parentClass}>
      <Link to="/" >INICIO</Link>
      <div className={`${parentClass}__cart`}>
        {totalProducts > 0 && (
          <span className={`${parentClass}__cart-counter`}>
            {totalProducts}
          </span>
        )}
        <FloatButton
          className={`${parentClass}__cart-button`}
          icon="ShoppingCart"
          role="link"
          onClick={handleUserClick}
        />
      </div>
    </nav>
  );
};

export default Menu;
