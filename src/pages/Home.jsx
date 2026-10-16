import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function Home({
  products,
  categories,
  cartItems,
  search,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onAddToCart,
  onQuantityChange,
  onRemove,
}) {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <section className="mb-8 rounded-3xl bg-purple-600 p-8 text-white sm:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-200">
            Welcome to ShopEase
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl">
            Find your everyday essentials.
          </h1>
          <p className="mt-4 max-w-xl text-purple-100">
            Simple shopping, beautiful products, and a better everyday
            experience.
          </p>
        </section>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <SearchBar search={search} onSearchChange={onSearchChange} />
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
              />
            </div>

            <ProductList products={products} onAddToCart={onAddToCart} />
          </section>

          <Cart
            items={cartItems}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
