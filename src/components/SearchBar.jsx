function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="search"
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products..."
      aria-label="Search products"
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-purple-500"
    />
  );
}

export default SearchBar;
