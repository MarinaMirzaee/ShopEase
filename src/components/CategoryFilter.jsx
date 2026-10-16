function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <select
      value={selectedCategory}
      onChange={(event) => onCategoryChange(event.target.value)}
      aria-label="Filter by category"
      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
