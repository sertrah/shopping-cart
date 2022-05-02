import Card from "presentation-layer/components/Card";
import { useQuery } from "react-query";
import { productService } from "application/services/product";

import "./products.scss";

const Products = () => {
  const { data: productList, status } = useQuery(
    "getAll",
    productService.getAll
  );
  return (
    status === "success" ? <div className="product" typeof="schema:Product">
      <section className="products">
        {productList.map((product)=> <Card product={product} />)}
      </section>
    </div> :
    <>Loading</>
  );
};

export default Products;
