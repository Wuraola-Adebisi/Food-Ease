export default function RecipeSectionHeader({
  activeCategory,
  debouncedQuery,
  onClear,
}) {
  const title = activeCategory || debouncedQuery
    ? activeCategory || `Results for "${debouncedQuery}"`
    : "All Recipes";

  return (
    <div className="flex items-center justify-between mb-4 pl-[10px]">
      <h2
        className="font-bold text-3xl"
        style={{
          fontFamily: "var(--font-serif)",
          color: "#111",
          lineHeight: "1.15",
        }}
      >
        {title}
      </h2>
      {(activeCategory || debouncedQuery) && (
        <button
          type="button"
          onClick={onClear}
          className="text-sm font-medium rounded-full px-4 py-1.5 border transition-colors"
          style={{
            borderColor: "var(--color-forest)",
            color: "var(--color-forest)",
            fontFamily: "var(--font-sans)",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.backgroundColor = "var(--color-forest)";
            event.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.backgroundColor = "transparent";
            event.currentTarget.style.color = "var(--color-forest)";
          }}
        >
          Clear x
        </button>
      )}
    </div>
  );
}
