import { BRAND_NAME } from "../../constants";

export default function BrandLogo({ scrolled = true, showMark = false }) {
  const textColor = scrolled ? "#111" : "#fff";
  const accentColor = scrolled
    ? "var(--color-forest)"
    : "rgba(255,255,255,0.75)";

  return (
    <a href="#" className="flex items-center gap-2 group w-fit">
      {showMark && (
        <span
          className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:rotate-12"
          style={{
            backgroundColor: "var(--color-forest)",
            fontFamily: "var(--font-serif)",
          }}
        >
          F
        </span>
      )}
      <span
        className="text-xl font-bold tracking-tight"
        style={{
          fontFamily: "var(--font-serif)",
          color: textColor,
          transition: "color 0.5s ease",
        }}
      >
        Food
        <span style={{ color: accentColor, transition: "color 0.5s ease" }}>
          {BRAND_NAME.replace("Food", "")}
        </span>
      </span>
    </a>
  );
}
