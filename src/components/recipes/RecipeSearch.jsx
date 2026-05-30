export default function RecipeSearch({ query, onQueryChange }) {
  return (
    <input
      className="mb-8 w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-base text-gray-700 focus:outline-none transition-all duration-200"
      style={{ fontFamily: "var(--font-sans)" }}
      onFocus={(event) => {
        event.target.style.borderColor = "var(--color-forest)";
      }}
      onBlur={(event) => {
        event.target.style.borderColor = "#e5e7eb";
      }}
      type="text"
      placeholder="Search recipes..."
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
    />
  );
}
