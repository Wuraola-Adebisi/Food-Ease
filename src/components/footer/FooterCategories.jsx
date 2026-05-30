import { CATEGORIES } from "../../constants";

export default function FooterCategories({ onCategorySelect }) {
  return (
    <div className="space-y-4 text-left">
      <h3
        className="text-base font-semibold tracking-wider uppercase"
        style={{ fontFamily: "var(--font-sans)", color: "#111" }}
      >
        Categories
      </h3>
      <ul className="space-y-2 list-none p-0 m-0 text-base">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <button
              type="button"
              onClick={() => onCategorySelect(category)}
              className="transition-colors bg-transparent border-none cursor-pointer p-0 text-base"
              style={{ color: "#777", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = "var(--color-forest)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = "#777";
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
