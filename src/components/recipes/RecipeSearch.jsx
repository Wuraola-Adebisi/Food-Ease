import { FiSearch, FiX } from "react-icons/fi";

export default function RecipeSearch({ query, onQueryChange }) {
  return (
    <div className="relative mb-0">
      <label htmlFor="recipe-search" className="sr-only">
        Search recipes by name, ingredient, category, or cuisine
      </label>
      <FiSearch
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
        size={19}
      />
      <input
        id="recipe-search"
        className="min-h-12 w-full rounded-xl border border-stone-200 bg-white py-3 pl-12 pr-12 text-base text-stone-800 outline-none transition-colors placeholder:text-stone-400 hover:border-stone-300 focus:border-[var(--color-forest)] focus:ring-2 focus:ring-[var(--color-forest)]/10"
        style={{ fontFamily: "var(--font-sans)" }}
        type="search"
        autoComplete="off"
        placeholder="Search recipes, ingredients, cuisine…"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      {query && (
        <button
          type="button"
          onClick={() => onQueryChange("")}
          aria-label="Clear recipe search"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-stone-400 transition hover:bg-stone-100 hover:text-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
        >
          <FiX aria-hidden="true" size={17} />
        </button>
      )}
    </div>
  );
}
