export default function RecipeSectionHeader({
  activeCategory,
  debouncedQuery,
  onClear,
  resultCount,
  showSaved = false,
}) {
  const title = showSaved
    ? "Saved Recipes"
    : activeCategory || (debouncedQuery ? `Results for “${debouncedQuery}”` : "All Recipes");

  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2
          className="font-serif text-2xl font-bold leading-tight text-stone-950 sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-stone-500" aria-live="polite">
          {resultCount} {resultCount === 1 ? "recipe" : "recipes"}
          {debouncedQuery && !showSaved ? " found" : " to explore"}
        </p>
      </div>
      {(activeCategory || debouncedQuery || showSaved) && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-full border border-[var(--color-forest)] px-4 py-2 text-sm font-semibold text-[var(--color-forest)] transition-colors hover:bg-[var(--color-forest)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
