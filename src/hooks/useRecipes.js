import { ITEMS_PER_PAGE } from "../constants";
import { usePagination } from "./usePagination";
import { useRecipeData } from "./useRecipeData";
import { useRecipeSearch } from "./useRecipeSearch";

export function useRecipes(activeCategory, savedIds = [], showSaved = false) {
  const { error, loading, recipes, refetchRecipes } = useRecipeData();
  const { clearQuery, debouncedQuery, filteredRecipes, query, setQuery } =
    useRecipeSearch(recipes, activeCategory, savedIds, showSaved);

  const {
    currentPage,
    pageItems: pageRecipes,
    resetPage,
    setCurrentPage,
    totalPages,
  } = usePagination(filteredRecipes, ITEMS_PER_PAGE);

  return {
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
    totalResults: filteredRecipes.length,
  };
}
