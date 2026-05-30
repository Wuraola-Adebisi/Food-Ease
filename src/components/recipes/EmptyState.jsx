import { FiCoffee } from "react-icons/fi";

export default function EmptyState({ activeCategory, onClear, query }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
      <div
        className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: "#f5f5f3", color: "var(--color-forest)" }}
      >
        <FiCoffee size={28} />
      </div>
      <div className="space-y-1">
        <h3
          className="text-xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "#111" }}
        >
          No recipes found
        </h3>
        <p
          className="text-sm max-w-xs"
          style={{ fontFamily: "var(--font-sans)", color: "#999" }}
        >
          {query && activeCategory
            ? `Nothing matches "${query}" in ${activeCategory}.`
            : query
              ? `We couldn't find anything for "${query}".`
              : `No recipes in the ${activeCategory} category yet.`}
        </p>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="rounded-full border px-5 py-2 text-sm font-semibold transition-all active:scale-95"
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
        Clear filters
      </button>
    </div>
  );
}
