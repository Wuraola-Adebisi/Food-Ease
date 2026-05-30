import { useRecipes } from "../../hooks/useRecipes";
import { scrollToRecipes } from "../../utils/scroll";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import RecipeError from "./RecipeError";
import RecipeList from "./RecipeList";
import RecipeLoadingGrid from "./RecipeLoadingGrid";
import RecipeSearch from "./RecipeSearch";
import RecipeSectionHeader from "./RecipeSectionHeader";
import CategoryFilter from "./CategoryFilter";

export default function RecipeGrid({ activeCategory, onCategorySelect }) {
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
  } = useRecipes(activeCategory);

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
    if (activeCategory) onCategorySelect(activeCategory);
  };

  if (error) {
    return <RecipeError message={error} onRetry={refetchRecipes} />;
  }

  return (
    <div id="recipes" className="mx-auto max-w-6xl px-6 pt-4 pb-12 mt-12">
      <CategoryFilter
  activeCategory={activeCategory}
  onCategorySelect={onCategorySelect}
/>
      <RecipeSearch query={query} onQueryChange={handleQueryChange} />

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
