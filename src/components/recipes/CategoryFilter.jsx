import { CATEGORIES } from "../../constants";

export default function CategoryFilter({ activeCategory, onCategorySelect }) {
  return (
    <div className="mb-6">
      <p
        className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: "var(--color-forest)" }}
      >
        Filter by category
      </p>

      <div
        className="flex flex-wrap gap-2"
        role="list"
        aria-label="Recipe categories"
      >
        <button
          type="button"
          onClick={() => {
            if (activeCategory) onCategorySelect(activeCategory);
          }}
          className="rounded-full border px-4 py-2 text-sm font-semibold transition-all active:scale-95"
          style={{
            backgroundColor: activeCategory ? "#fff" : "var(--color-forest)",
            borderColor: activeCategory ? "#e5e7eb" : "var(--color-forest)",
            color: activeCategory ? "#555" : "#fff",
            fontFamily: "var(--font-sans)",
          }}
          aria-pressed={!activeCategory}
        >
          All
        </button>

        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategorySelect(category)}
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-all active:scale-95"
              style={{
                backgroundColor: isActive ? "var(--color-forest)" : "#fff",
                borderColor: isActive ? "var(--color-forest)" : "#e5e7eb",
                color: isActive ? "#fff" : "#555",
                fontFamily: "var(--font-sans)",
              }}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
