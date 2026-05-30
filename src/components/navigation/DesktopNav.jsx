import { FiChevronDown } from "react-icons/fi";
import { NAV_LINKS } from "../../constants";
import RecipeDropdown from "./RecipeDropdown";

export default function DesktopNav({
  activeCategory,
  dropdownOpen,
  dropdownRef,
  scrolled,
  onCategorySelect,
  onDropdownClose,
  onMouseEnter,
  onMouseLeave,
  onToggleDropdown,
}) {
  return (
    <ul
      className="hidden md:flex items-center gap-8 list-none m-0 p-0 text-base font-medium"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <li>
        <a
          href="#"
          className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          style={{
            color: scrolled ? "#111" : "#fff",
            transition: "color 0.5s ease",
          }}
        >
          Home
        </a>
      </li>

      <li
        ref={dropdownRef}
        className="relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          type="button"
          onClick={onToggleDropdown}
          className="relative py-2 flex items-center gap-1 font-medium bg-transparent border-none cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          style={{
            color: scrolled ? "#555" : "rgba(255,255,255,0.75)",
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            transition: "color 0.3s ease",
            padding: "0.5rem 0",
          }}
        >
          Recipes
          <FiChevronDown
            size={14}
            style={{
              transition: "transform 0.2s ease",
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              marginTop: "1px",
            }}
          />
        </button>

        <RecipeDropdown
          activeCategory={activeCategory}
          dropdownOpen={dropdownOpen}
          onCategorySelect={onCategorySelect}
          onClose={onDropdownClose}
        />
      </li>

      {NAV_LINKS.filter((label) => label !== "Home").map((label) => (
        <li key={label}>
          <a
            href="#"
            className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            style={{
              color: scrolled ? "#555" : "rgba(255,255,255,0.75)",
              transition: "color 0.3s ease",
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
