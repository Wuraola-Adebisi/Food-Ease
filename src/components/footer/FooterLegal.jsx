import { FOOTER_LEGAL_LINKS } from "../../constants";

export default function FooterLegal() {
  return (
    <div
      className="mt-16 border-t border-gray-200/60 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm"
      style={{ color: "#999", fontFamily: "var(--font-sans)" }}
    >
      <p>Copyright {new Date().getFullYear()} FoodEase Inc. All rights reserved.</p>
      <div className="flex gap-6">
        {FOOTER_LEGAL_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            className="transition-colors"
            style={{ color: "#999" }}
            onMouseEnter={(event) => {
              event.target.style.color = "var(--color-forest)";
            }}
            onMouseLeave={(event) => {
              event.target.style.color = "#999";
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
