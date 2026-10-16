import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <p className="col-span-full py-10 text-center text-gray-500">
        No products found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
