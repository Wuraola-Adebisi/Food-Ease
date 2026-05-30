import { RECIPE_DESCRIPTION_LIMIT } from "../../constants";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          area={meal.strArea}
          category={meal.strCategory}
          description={`${meal.strInstructions.slice(0, RECIPE_DESCRIPTION_LIMIT)}...`}
          image={meal.strMealThumb}
          tags={meal.strTags || "-"}
          title={meal.strMeal}
        />
      ))}
    </section>
  );
}
