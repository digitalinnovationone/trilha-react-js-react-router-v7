import { FC } from "react";
import { Link } from "react-router";
import "./styles.css";

type Props = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const ProductItem: FC<Props> = ({ id, image, title, price }) => {
  return (
    <div className="product__item">
      <img src={image} alt={title} className="product__image" />
      <h3 className="product__title">{title}</h3>
      <p className="product__price">$ {price}</p>
      <Link className="product__link" to={`/product/${id}`}>
        View details
      </Link>
      <button className="product__button">Add to order</button>
    </div>
  );
};

export default ProductItem;

