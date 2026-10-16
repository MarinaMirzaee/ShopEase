function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 py-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 rounded-lg object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price} each</p>

        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => onQuantityChange(item.id, -1)}
            aria-label={`Decrease ${item.name} quantity`}
            className="rounded bg-gray-100 px-2"
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, 1)}
            aria-label={`Increase ${item.name} quantity`}
            className="rounded bg-gray-100 px-2"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="ml-auto text-sm text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
