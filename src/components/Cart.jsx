import CartItem from "./CartItem";

function Cart({ items, onQuantityChange, onRemove }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <aside className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Your Cart</h2>

      {items.length === 0 ? (
        <p className="py-6 text-gray-500">Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))
      )}

      <div className="mt-5 flex justify-between border-t pt-4 text-lg font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </aside>
  );
}

export default Cart;
