import { RECIPE_DESCRIPTION_LIMIT } from "../../constants";
import RecipeCard from "./RecipeCard";

function getRecipeExcerpt(instructions = "") {
  const cleaned = String(instructions || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.length <= RECIPE_DESCRIPTION_LIMIT) return cleaned;

  const excerpt = cleaned.slice(0, RECIPE_DESCRIPTION_LIMIT);
  const sentenceEnd = Math.max(
    excerpt.lastIndexOf(". "),
    excerpt.lastIndexOf("! "),
    excerpt.lastIndexOf("? ")
  );

  return sentenceEnd > 45
    ? excerpt.slice(0, sentenceEnd + 1)
    : `${excerpt.slice(0, Math.max(1, excerpt.lastIndexOf(" ")))}…`;
}

function getRecipeTags(tags = "") {
  return String(tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 3);
}

export default function RecipeList({
  onOpenRecipe,
  onToggleSaved,
  recipes,
  savedIds = [],
}) {
  return (
    <section
      aria-label="Recipes"
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {recipes.map((meal) => {
        const id = String(meal.idMeal);
        return (
          <RecipeCard
            key={id}
            area={meal.strArea}
            category={meal.strCategory}
            description={getRecipeExcerpt(meal.strInstructions)}
            image={meal.strMealThumb}
            isSaved={savedIds.includes(id)}
            onOpen={() => onOpenRecipe(meal)}
            onToggleSaved={() => onToggleSaved(id)}
            tags={getRecipeTags(meal.strTags)}
            title={meal.strMeal || "Untitled recipe"}
          />
        );
      })}
    </section>
  );
}
