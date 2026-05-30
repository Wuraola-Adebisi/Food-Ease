import { useMemo, useState } from "react";
import { SEARCH_DEBOUNCE_MS } from "../constants";
import { useDebouncedValue } from "./useDebouncedValue";

export function useRecipeSearch(recipes, activeCategory) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, SEARCH_DEBOUNCE_MS);

  const filteredRecipes = useMemo(
    () =>
      recipes.filter((meal) => {
        const matchesQuery = meal.strMeal
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase());
        const matchesCategory = activeCategory
          ? meal.strCategory === activeCategory
          : true;

        return matchesQuery && matchesCategory;
      }),
    [activeCategory, debouncedQuery, recipes],
  );

  const clearQuery = () => {
    setQuery("");
  };

  return {
    clearQuery,
    debouncedQuery,
    filteredRecipes,
    query,
    setQuery,
  };
}
