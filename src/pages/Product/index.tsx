import { useParams } from "react-router";
import Product from "../../components/Product";

const ProductPage = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  return (
    <>
      <h2>Product details</h2>
      <Product id={Number(id)} />
    </>
  );
};

export default ProductPage;

