import { FEATURED_RECIPE } from "../../constants";

export default function FeaturedRecipe() {
  return (
    <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 mt-12 items-center border-b border-gray-100 p-12">
      <div className="flex flex-col gap-4">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--color-forest)" }}
        >
          {FEATURED_RECIPE.eyebrow}
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black leading-snug">
          {FEATURED_RECIPE.title}
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#777", fontFamily: "var(--font-sans)" }}
        >
          {FEATURED_RECIPE.description}
        </p>
        <div
          className="flex gap-5"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "#777",
          }}
        >
          <span>
            <span
              className="font-semibold"
              style={{ color: "var(--color-forest)" }}
            >
              Prep:
            </span>{" "}
            {FEATURED_RECIPE.prepTime}
          </span>
          <span>
            <span
              className="font-semibold"
              style={{ color: "var(--color-forest)" }}
            >
              Difficulty:
            </span>{" "}
            {FEATURED_RECIPE.difficulty}
          </span>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 active:scale-95"
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
            Get Recipe -&gt;
          </button>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden aspect-[3/3] bg-gray-100">
        <img
          src={FEATURED_RECIPE.imageUrl}
          alt={FEATURED_RECIPE.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}
