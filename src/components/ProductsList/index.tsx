import { FC, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Product } from "../../types/product";
import "./styles.css";
import SearchBar from "../SearchBar";

type Props = {
  category: string;
  limit: number;
};

const ProductsList: FC<Props> = ({ category, limit }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      const sufixUrl = category !== "all" ? `/category/${category}` : "";
      const result = await fetch(
        `https://fakestoreapi.com/products${sufixUrl}?limit=${limit}`
      );

      if (!result.ok) {
        throw new Error("Error to fetch products from API");
      }

      const data = await result.json();
      setProducts(data);
      setLoading(false);
    };

    try {
      fetchProducts();
    } catch (err) {
      console.error("Error to fetch products list", err);
      setProducts([]);
      setLoading(false);
    }
  }, [category]);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="products__header">
        <h2 className="products__title">Choose products</h2>
        <SearchBar onSearch={(term: string) => setSearchTerm(term)} />
      </div>
      {loading && <p>📦 Loading products...</p>}
      {!loading && filteredProducts.length === 0 && (
        <p>☹️ Product not found. Please, try again.</p>
      )}
      {!loading && products.length > 0 && (
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;

