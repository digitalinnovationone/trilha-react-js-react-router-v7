import { useState } from "react";
import Categories from "../../components/Categories";
import ProductsList from "../../components/ProductsList";
import { useParams } from "react-router";

function HomePage() {
  const params = useParams();
  const limit = params.limit ? Number(params.limit) : 20;
  const defaultCategory = params.category || "all";
  const [category, setCategory] = useState(defaultCategory);

  return (
    <>
      <Categories
        defaultCategory={defaultCategory}
        onClick={(category: string) => setCategory(category)}
      />
      <ProductsList category={category} limit={limit} />
    </>
  );
}

export default HomePage;

