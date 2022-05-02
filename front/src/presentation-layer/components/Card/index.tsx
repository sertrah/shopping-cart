import {FC} from "react";
import { useHistory } from "react-router-dom";
import { RouterPathList } from "application/models/commonts"

import { IProduct } from "application/models/product";
import Stars from "../Stars";
import "./style.scss";

// const imgURL = "https://www.pngmart.com/files/13/Apple-Airpods-PNG-Clipart.png"
const parentClass = "card";

const Card: FC<{product: IProduct}> = ({ product }) => {
  const history = useHistory();
  const handleUserClick = () => {
      history.push(`${RouterPathList.detailProduct.replace(":id", product.id)}`);
    };

  return (
    <article className={parentClass} role="link" onClick={()=> handleUserClick()}>
      <figure className={`${parentClass}__content`}>
        <img src={process.env.REACT_APP_CDN+product.imageUrl} alt="Trulli" className={`${parentClass}__image`} />
        <figcaption className={`${parentClass}__title`} >{product.name}</figcaption>
      </figure>
      <div className={`${parentClass}__footer`}>
      <p className={`${parentClass}__price`}>$ {product.price}</p>
      <Stars rating={product.rating} className={`${parentClass}__starts`} />
      </div>
    </article>
  );
};

export default Card;
