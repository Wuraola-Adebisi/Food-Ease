import { useEffect, useMemo, useState } from "react";
import {
  ITEMS_PER_PAGE,
  RECIPE_API_URL,
  SEARCH_DEBOUNCE_MS,
} from "../constants";

export function useRecipes(activeCategory) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(RECIPE_API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch recipes.");
        return response.json();
      })
      .then((data) => {
        if (!data.meals) throw new Error("No recipes found.");
        setRecipes(data.meals);
        setLoading(false);
      })
      .catch((fetchError) => {
        setError(fetchError.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, debouncedQuery]);

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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE),
  );
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageRecipes = filteredRecipes.slice(start, start + ITEMS_PER_PAGE);

  return {
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
  };
}
