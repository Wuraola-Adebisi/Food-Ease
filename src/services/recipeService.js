import { RECIPE_API_URL } from "../constants";

export async function fetchRecipes({ signal } = {}) {
  let response;

  try {
    response = await fetch(RECIPE_API_URL, { signal });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error("We couldn't connect to the recipe service. Check your connection and try again.");
  }

  if (!response.ok) {
    throw new Error("The recipe service is temporarily unavailable. Please try again.");
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("The recipe service returned an unreadable response. Please try again.");
  }

  if (!data || (data.meals !== null && !Array.isArray(data.meals))) {
    throw new Error("The recipe service returned unexpected data. Please try again.");
  }

  return Array.isArray(data.meals) ? data.meals.filter((meal) => meal && meal.idMeal) : [];
}
