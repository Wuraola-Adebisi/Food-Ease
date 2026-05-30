import FeaturedRecipe from "./FeaturedRecipe";
import HeroMedia from "./HeroMedia";

export default function Hero() {
  return (
    <section className="w-full bg-white text-black">
      <HeroMedia />
      <FeaturedRecipe />
    </section>
  );
}
