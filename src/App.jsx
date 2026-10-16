import { useEffect, useMemo, useState } from "react";
import Home from "./pages/Home";
import products from "./data/products";

// Categories never change, so they are created once outside the component
const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shopease-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    try {
      localStorage.setItem("shopease-cart", JSON.stringify(cartItems));
    } catch {
      // The app still works if localStorage is unavailable
    }
  }, [cartItems]);

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

  function addToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    );
  }

  return (
    <Home
      products={filteredProducts}
      categories={categories}
      cartItems={cartItems}
      search={search}
      selectedCategory={selectedCategory}
      onSearchChange={setSearch}
      onCategoryChange={setSelectedCategory}
      onAddToCart={addToCart}
      onQuantityChange={changeQuantity}
      onRemove={removeFromCart}
    />
  );
}

export default App;
