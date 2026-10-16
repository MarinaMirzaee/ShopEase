import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  function handleAdd(product) {
    console.log("Added:", product.name);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold text-purple-600">ShopEase</h1>
      <ProductList products={products} onAddToCart={handleAdd} />
    </div>
  );
}

export default App;
