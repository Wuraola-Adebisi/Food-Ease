export default function RecipeCard({ area, category, description, image, tags, title }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white transition-transform duration-500 ease-in-out hover:-translate-y-2">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="space-y-3 p-6 text-left">
        <h2 className="font-serif text-xl font-bold text-gray-900">{title}</h2>
        <p className="font-sans text-base font-light text-gray-500">
          {description}
        </p>
        <div className="grid gap-1 text-base sm:grid-cols-2">
          <p className="font-sans text-gray-600">
            <span
              className="font-semibold"
              style={{ color: "var(--color-forest)" }}
            >
              Category:
            </span>{" "}
            {category}
          </p>
          <p className="font-sans text-gray-600">
            <span
              className="font-semibold"
              style={{ color: "var(--color-forest)" }}
            >
              Cuisine:
            </span>{" "}
            {area}
          </p>
          <p className="font-sans text-gray-600 sm:col-span-2">
            <span
              className="font-semibold"
              style={{ color: "var(--color-forest)" }}
            >
              Tags:
            </span>{" "}
            {tags}
          </p>
        </div>
      </div>
    </div>
  );
}
