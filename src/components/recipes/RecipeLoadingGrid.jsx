import { SKELETON_CARD_COUNT } from "../../constants";
import SkeletonCard from "./SkeletonCard";

export default function RecipeLoadingGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </section>
  );
}
