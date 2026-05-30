import { useRecipes } from "../../hooks/useRecipes";
import { scrollToRecipes } from "../../utils/scroll";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import RecipeError from "./RecipeError";
import RecipeList from "./RecipeList";
import RecipeLoadingGrid from "./RecipeLoadingGrid";
import RecipeSearch from "./RecipeSearch";
import RecipeSectionHeader from "./RecipeSectionHeader";

export default function RecipeGrid({ activeCategory, onCategorySelect }) {
  const {
    currentPage,
    debouncedQuery,
    error,
    loading,
    pageRecipes,
    query,
    setCurrentPage,
    setDebouncedQuery,
    setQuery,
    totalPages,
  } = useRecipes(activeCategory);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToRecipes();
  };

  const handleClearAll = () => {
    setQuery("");
    setDebouncedQuery("");
    if (activeCategory) onCategorySelect(activeCategory);
  };

  if (error) {
    return <RecipeError message={error} />;
  }

  return (
    <div id="recipes" className="mx-auto max-w-6xl px-6 pt-4 pb-12 mt-12">
      <RecipeSearch query={query} onQueryChange={setQuery} />

      <RecipeSectionHeader
        activeCategory={activeCategory}
        debouncedQuery={debouncedQuery}
        onClear={handleClearAll}
      />

      {loading ? (
        <RecipeLoadingGrid />
      ) : pageRecipes.length === 0 ? (
        <EmptyState
          activeCategory={activeCategory}
          onClear={handleClearAll}
          query={debouncedQuery}
        />
      ) : (
        <RecipeList recipes={pageRecipes} />
      )}

      {!loading && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
