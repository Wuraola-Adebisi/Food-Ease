import { RECIPE_API_URL } from "../constants";

export async function fetchRecipes() {
  const response = await fetch(RECIPE_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes.");
  }

  const data = await response.json();

  if (!data.meals) {
    throw new Error("No recipes found.");
  }

  return data.meals;
}
