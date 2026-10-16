function ProductCard({ product, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-purple-600">{product.category}</p>
        <h2 className="mt-2 text-lg font-bold text-gray-800">{product.name}</h2>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
