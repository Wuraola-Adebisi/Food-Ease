import { FiBookmark, FiCoffee } from "react-icons/fi";

export default function EmptyState({ activeCategory, onClear, query, showSaved = false }) {
  const message = showSaved
    ? "Save recipes you want to make later and they’ll appear here."
    : query && activeCategory
      ? `Nothing matches “${query}” in ${activeCategory}.`
      : query
        ? `We couldn't find anything for “${query}”. Try another ingredient or recipe name.`
        : activeCategory
          ? `No recipes in the ${activeCategory} category yet.`
          : "There are no recipes to show right now. Try refreshing the recipe list.";

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20 text-center sm:py-24">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-forest-wash)] text-[var(--color-forest)]">
        {showSaved ? <FiBookmark size={27} aria-hidden="true" /> : <FiCoffee size={28} aria-hidden="true" />}
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-bold text-stone-950">
          {showSaved ? "Nothing saved yet" : "No recipes found"}
        </h3>
        <p className="mx-auto max-w-sm text-sm leading-6 text-stone-500">{message}</p>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="rounded-full border border-[var(--color-forest)] px-5 py-2.5 text-sm font-semibold text-[var(--color-forest)] transition-colors hover:bg-[var(--color-forest)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
      >
        {showSaved ? "Explore recipes" : "Clear filters"}
      </button>
    </div>
  );
}
