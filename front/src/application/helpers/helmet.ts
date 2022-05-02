import { IProduct } from "application/models/product";

export const structuredDataSingle = (product: IProduct) => {
  let data = {
    "@context": "http://schema.org/",
    "@type": "Product",
    name: `${product.name}`,
    image: product.imageUrl,
    description: product.description,
    url: window.location.href,
    author: {
      "@type": "Person",
      name: "Harlen Giraldo",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: `${product.price}`,
      price: `${product.price}`,
      availability: `${product.countInStock}`,
      seller: {
        "@type": "Organization",
        name: "Harlen Giraldo",
      },
    },
  };
  return JSON.stringify(data);
};