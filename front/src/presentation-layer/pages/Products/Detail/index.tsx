import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { productService } from "application/services/product";
import { useShoppingCartContext } from "application/context/ShoppingCart";
import { IProduct } from "application/models/product";
import Stars from "presentation-layer/components/Stars";
import Pill from "presentation-layer/components/Pill";
import Button from "presentation-layer/components/Button/Button";

import "./style.scss";

const parentClass = "detail-product";

const Starts: FC<{ className?: string }> = () => {
  const { id } = useParams<{ id: string }>();
  const { addProduct } = useShoppingCartContext();

  const { data: product, isLoading } = useQuery<IProduct, Error>(
    ["product", id],
    ({ queryKey: [, id] }) => productService.getById(id as string)
  );

  return (product && !isLoading) ? (
    <div className={parentClass}>
      <section className={`${parentClass}__container-image`}>
        <img src={process.env.REACT_APP_CDN+product.imageUrl} alt={product.name} className={`${parentClass}__image`} />
      </section>
      <section className={`${parentClass}__container`}>
        <h1 className={`${parentClass}__title`}>{product.name}</h1>
        <div className={`${parentClass}__pills`}>
          <Pill text={product.brand} />
          <Pill text={product.category} />
        </div>
        <p className={`${parentClass}__description`}>{product.description}</p>
        <div className={`${parentClass}__price`}>
          <p>$ {product.price}</p>
          <Stars rating={product.rating} countReview={product.countInStock} />
        </div>
      </section>
      <div className={`${parentClass}__action`}>
        <Button className={`${parentClass}__add-cart`} onClick={()=> addProduct(product)} isDisabled={product.countInStock === 0} >Add to cart</Button>
      </div>
    </div>
  ) : (
    <>Loading...</>
  );
};

export default Starts;
