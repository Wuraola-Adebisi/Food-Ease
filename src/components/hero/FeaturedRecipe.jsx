import { FEATURED_RECIPE } from "../../constants";

export default function FeaturedRecipe() {
  return (
    <div className="mx-auto grid w-full max-w-6xl items-center gap-8 border-b border-gray-100 px-6 py-14 sm:px-10 md:grid-cols-2 md:gap-12 md:py-20">
      <div className="flex flex-col items-start gap-4">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--color-forest)" }}
        >
          {FEATURED_RECIPE.eyebrow}
        </p>
        <h2 className="font-serif text-2xl font-bold leading-snug text-black sm:text-3xl">
          {FEATURED_RECIPE.title}
        </h2>
        <p className="max-w-xl text-base leading-7 text-gray-600">
          {FEATURED_RECIPE.description}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <span>
            <span className="font-semibold text-[var(--color-forest)]">
              Prep:
            </span>{" "}
            {FEATURED_RECIPE.prepTime}
          </span>
          <span>
            <span className="font-semibold text-[var(--color-forest)]">
              Difficulty:
            </span>{" "}
            {FEATURED_RECIPE.difficulty}
          </span>
        </div>
        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-200 hover:bg-[var(--color-forest)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-forest)] active:scale-[0.98]"
          style={{
            borderColor: "var(--color-forest)",
            color: "var(--color-forest)",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.backgroundColor = "var(--color-forest)";
            event.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.backgroundColor = "transparent";
            event.currentTarget.style.color = "var(--color-forest)";
          }}
        >
          Get the recipe
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={FEATURED_RECIPE.imageUrl}
          alt={FEATURED_RECIPE.imageAlt}
          className="h-auto max-h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}
