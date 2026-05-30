import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const ITEMS_PER_PAGE = 12;

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white animate-pulse">
      <div className="h-56 w-full bg-gray-200" />
      <div className="space-y-3 p-6">
        <div className="h-5 w-3/4 rounded-full bg-gray-200" />
        <div className="h-4 w-full rounded-full bg-gray-100" />
        <div className="h-4 w-5/6 rounded-full bg-gray-100" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="h-4 w-2/3 rounded-full bg-gray-100" />
          <div className="h-4 w-2/3 rounded-full bg-gray-100" />
          <div className="h-4 w-1/2 rounded-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ query, activeCategory, onClear }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
      <div
        className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: "#f5f5f3" }}
      >
        🍽️
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
        onClick={onClear}
        className="rounded-full border px-5 py-2 text-sm font-semibold transition-all active:scale-95"
        style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-forest)"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--color-forest)"; }}
      >
        Clear filters
      </button>
    </div>
  );
}

export default function RecipeGrid({ activeCategory, onCategorySelect }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipes.");
        return res.json();
      })
      .then((data) => {
        if (!data.meals) throw new Error("No recipes found.");
        setRecipes(data.meals);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);
    return () => clearTimeout(timer);
  }, [query]);


  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, debouncedQuery]);

  const goToPage = (page) => {
  setCurrentPage(page);
  document.getElementById("recipes")?.scrollIntoView({ behavior: "smooth" });
};

  const filtered = recipes.filter((meal) => {
    const matchesQuery = meal.strMeal.toLowerCase().includes(debouncedQuery.toLowerCase());
    const matchesCategory = activeCategory ? meal.strCategory === activeCategory : true;
    return matchesQuery && matchesCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageRecipes = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleClearAll = () => {
    setQuery("");
    setDebouncedQuery("");
    if (activeCategory) onCategorySelect(activeCategory);
  };

  if (error) {
    return (
      <section id="recipes" className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-center gap-3">
        <p className="font-sans text-base text-red-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
          style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}
        >
          Try again
        </button>
      </section>
    );
  }

  return (
    <div id="recipes" className="mx-auto max-w-6xl px-6 pt-4 pb-12 mt-12">
      <input
        className="mb-8 w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-base text-gray-700 focus:outline-none transition-all duration-200"
        style={{ fontFamily: "var(--font-sans)" }}
        onFocus={(e) => (e.target.style.borderColor = "var(--color-forest)")}
        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex items-center justify-between mb-4 pl-[10px]">
        <h2
          className="font-bold text-3xl"
          style={{ fontFamily: "var(--font-serif)", color: "#111", lineHeight: "1.15" }}
        >
          {activeCategory
            ? activeCategory
            : debouncedQuery
            ? `Results for "${debouncedQuery}"`
            : "All Recipes"}
        </h2>
        {(activeCategory || debouncedQuery) && (
          <button
            onClick={handleClearAll}
            className="text-sm font-medium rounded-full px-4 py-1.5 border transition-colors"
            style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-forest)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--color-forest)"; }}
          >
            Clear ✕
          </button>
        )}
      </div>

      {loading ? (
        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </section>
      ) : pageRecipes.length === 0 ? (
        <EmptyState
          query={debouncedQuery}
          activeCategory={activeCategory}
          onClear={handleClearAll}
        />
      ) : (
        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pageRecipes.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              img={meal.strMealThumb}
              Title={meal.strMeal}
              Description={meal.strInstructions.slice(0, 100) + "…"}
              Category={meal.strCategory}
              Area={meal.strArea}
              Tags={meal.strTags || "—"}
            />
          ))}
        </section>
      )}

      {!loading && totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2" style={{ fontFamily: "var(--font-sans)" }}>
          <button
            className="rounded px-4 py-2 text-base border border-gray-200 disabled:opacity-40 transition-colors duration-200 hover:bg-gray-50"
            style={{ color: "#555" }}
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className="px-4 py-2 text-base rounded border transition-colors duration-200"
                style={
                  page === currentPage
                    ? { backgroundColor: "var(--color-forest)", color: "#fff", borderColor: "var(--color-forest)" }
                    : { backgroundColor: "#fff", color: "#555", borderColor: "#e5e7eb" }
                }
              >
                {page}
              </button>
            );
          })}
          <button
            className="rounded px-4 py-2 text-base border border-gray-200 disabled:opacity-40 transition-colors duration-200 hover:bg-gray-50"
            style={{ color: "#555" }}
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
