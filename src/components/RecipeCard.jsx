export default function RecipeCard(props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white transition-transform duration-500 ease-in-out hover:-translate-y-2">
      <img
        src={props.img}
        alt={props.Title}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-3 p-6 text-left">
        <h2 className="font-serif text-xl font-bold text-gray-900">
          {props.Title}
        </h2>
        <p className="font-sans text-base font-light text-gray-500">
          {props.Description}
        </p>
        <div className="grid gap-1 text-base sm:grid-cols-2">
          <p className="font-sans text-gray-600">
            <span className="font-semibold" style={{ color: "var(--color-forest)" }}>
              Category:
            </span>{" "}
            {props.Category}
          </p>
          <p className="font-sans text-gray-600">
            <span className="font-semibold" style={{ color: "var(--color-forest)" }}>
              Cuisine:
            </span>{" "}
            {props.Area}
          </p>
          <p className="font-sans text-gray-600 sm:col-span-2">
            <span className="font-semibold" style={{ color: "var(--color-forest)" }}>
              Tags:
            </span>{" "}
            {props.Tags}
          </p>
        </div>
      </div>
    </div>
  );
}
