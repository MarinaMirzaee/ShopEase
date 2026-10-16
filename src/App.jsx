import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import products from "./data/products";

const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  function handleAdd(product) {
    console.log("Added:", product.name);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold text-purple-600">ShopEase</h1>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <SearchBar search={search} onSearchChange={setSearch} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ProductList products={filteredProducts} onAddToCart={handleAdd} />
    </div>
  );
}

export default App;
