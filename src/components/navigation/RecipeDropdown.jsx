import { CATEGORIES } from "../../constants";

export default function RecipeDropdown({
  activeCategory,
  dropdownOpen,
  onCategorySelect,
  onClose,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        width: "200px",
        background: "#fff",
        borderRadius: "14px",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)",
        padding: "8px",
        opacity: dropdownOpen ? 1 : 0,
        pointerEvents: dropdownOpen ? "auto" : "none",
        transform: dropdownOpen
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(-6px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        zIndex: 100,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-6px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "12px",
          height: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "#fff",
            transform: "rotate(45deg)",
            margin: "3px auto 0",
            boxShadow: "-1px -1px 3px rgba(0,0,0,0.06)",
          }}
        />
      </div>

      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => {
              onCategorySelect(category);
              onClose();
            }}
            className="w-full text-left block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 border-none cursor-pointer"
            style={{
              backgroundColor: isActive ? "var(--color-forest)" : "transparent",
              color: isActive ? "#fff" : "#333",
              fontFamily: "var(--font-sans)",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "#f5f5f3";
                e.currentTarget.style.color = "var(--color-forest)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#333";
              }
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
