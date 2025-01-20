import { FC, useEffect, useState } from "react";
import { Product as ProductType } from "../../types/product";
import "./styles.css";

type Props = {
  id: number;
};

const Product: FC<Props> = ({ id }) => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!result.ok) {
        throw new Error("Error to fetch product from API");
      }

      const data = await result.json();
      setProduct(data);
    };

    try {
      fetchProduct();
    } catch (err) {
      console.error("Error to fetch product by id", err);
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return null;
  }

  const { image, title, description, price } = product;

  return (
    <>
      <h2>Product detail #{id}</h2>
      <div className="product">
        <img className="product__image" src={image} alt={title} />
        <div className="product__details">
          <h1 className="product__title">{title}</h1>
          <p className="product__description">{description}</p>
          <p className="product__price">${price.toFixed(2)}</p>
          <button>Add to order</button>
        </div>
      </div>
    </>
  );
};

export default Product;
