import { useState } from "react";
import Categories from "../../components/Categories";
import ProductsList from "../../components/ProductsList";
import "./styles.css";

function HomePage() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Categories onClick={(category: string) => setCategory(category)} />
      <ProductsList category={category} />
    </>
  );
}

export default HomePage;
