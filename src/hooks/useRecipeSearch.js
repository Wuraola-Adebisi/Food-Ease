import { useMemo, useState } from "react";
import { SEARCH_DEBOUNCE_MS } from "../constants";
import { useDebouncedValue } from "./useDebouncedValue";

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .trim();
}

function getSearchableText(meal) {
  const ingredients = Array.from({ length: 20 }, (_, index) =>
    meal[`strIngredient${index + 1}`]
  );

  return normalize([
    meal.strMeal,
    meal.strCategory,
    meal.strArea,
    meal.strTags,
    ...ingredients,
  ].filter(Boolean).join(" "));
}

export function useRecipeSearch(recipes, activeCategory, savedIds = [], showSaved = false) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, SEARCH_DEBOUNCE_MS);
  const normalizedQuery = normalize(debouncedQuery);

  const filteredRecipes = useMemo(
    () =>
      recipes.filter((meal) => {
        const matchesQuery = !normalizedQuery || getSearchableText(meal).includes(normalizedQuery);
        const matchesCategory = activeCategory
          ? normalize(meal.strCategory) === normalize(activeCategory)
          : true;
        const matchesSaved = !showSaved || savedIds.includes(String(meal.idMeal));

        return matchesQuery && matchesCategory && matchesSaved;
      }),
    [activeCategory, normalizedQuery, recipes, savedIds, showSaved],
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
