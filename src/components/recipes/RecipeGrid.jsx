import { useCallback, useEffect, useState } from "react";
import { FiBookmark, FiHeart } from "react-icons/fi";
import { useRecipes } from "../../hooks/useRecipes";
import { useSavedRecipes } from "../../hooks/useSavedRecipes";
import { scrollToRecipes } from "../../utils/scroll";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import RecipeDetailModal from "./RecipeDetailModal";
import RecipeError from "./RecipeError";
import RecipeList from "./RecipeList";
import RecipeLoadingGrid from "./RecipeLoadingGrid";
import RecipeSearch from "./RecipeSearch";
import RecipeSectionHeader from "./RecipeSectionHeader";
import CategoryFilter from "./CategoryFilter";

export default function RecipeGrid({ activeCategory, onCategorySelect }) {
  const [showSaved, setShowSaved] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { savedIds, toggleSaved } = useSavedRecipes();

  const {
    clearQuery,
    currentPage,
    debouncedQuery,
    error,
    loading,
    pageRecipes,
    query,
    refetchRecipes,
    resetPage,
    setCurrentPage,
    setQuery,
    totalPages,
    totalResults,
  } = useRecipes(activeCategory, savedIds, showSaved);

  const closeRecipe = useCallback(() => setSelectedRecipe(null), []);

  useEffect(() => {
    resetPage();
  }, [activeCategory, resetPage, showSaved]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToRecipes();
  };

  const handleQueryChange = (nextQuery) => {
    setQuery(nextQuery);
    resetPage();
  };

  const handleClearAll = () => {
    clearQuery();
    resetPage();
    setShowSaved(false);
    if (activeCategory) onCategorySelect(activeCategory);
  };

  if (error) {
    return <RecipeError message={error} onRetry={refetchRecipes} />;
  }

  return (
    <>
      <div id="recipes" className="mx-auto mt-12 max-w-6xl px-6 pb-12 pt-4">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategorySelect={onCategorySelect}
        />

        <div className="mb-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <RecipeSearch query={query} onQueryChange={handleQueryChange} />
          <button
            type="button"
            onClick={() => {
              setShowSaved((current) => !current);
              resetPage();
            }}
            aria-pressed={showSaved}
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] ${showSaved ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-white" : "border-stone-200 bg-white text-stone-700 hover:border-[var(--color-forest)] hover:text-[var(--color-forest)]"}`}
          >
            {showSaved ? <FiHeart aria-hidden="true" className="fill-current" /> : <FiBookmark aria-hidden="true" />}
            {showSaved ? "Saved recipes" : "Saved recipes"}
            <span className={`rounded-full px-2 py-0.5 text-xs ${showSaved ? "bg-white/15" : "bg-stone-100"}`}>
              {savedIds.length}
            </span>
          </button>
        </div>

        <RecipeSectionHeader
          activeCategory={activeCategory}
          debouncedQuery={debouncedQuery}
          onClear={handleClearAll}
          resultCount={totalResults}
          showSaved={showSaved}
        />

        {loading ? (
          <RecipeLoadingGrid />
        ) : pageRecipes.length === 0 ? (
          <EmptyState
            activeCategory={activeCategory}
            onClear={handleClearAll}
            query={debouncedQuery}
            showSaved={showSaved}
          />
        ) : (
          <RecipeList
            onOpenRecipe={setSelectedRecipe}
            onToggleSaved={toggleSaved}
            recipes={pageRecipes}
            savedIds={savedIds}
          />
        )}

        {!loading && (
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </div>

      <RecipeDetailModal
        key={selectedRecipe?.idMeal || "recipe-detail-closed"}
        recipe={selectedRecipe}
        isSaved={selectedRecipe ? savedIds.includes(String(selectedRecipe.idMeal)) : false}
        onClose={closeRecipe}
        onToggleSaved={toggleSaved}
      />
    </>
  );
}
