import { NAV_LINKS } from "../../constants";

export default function DesktopNav({ scrolled }) {
  return (
    <ul
      className="hidden md:flex items-center gap-8 list-none m-0 p-0 text-base font-medium"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {NAV_LINKS.map((label) => (
        <li key={label}>
          <a
            href="#"
            className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            style={{
              color:
                label === "Home" && !scrolled
                  ? "#fff"
                  : scrolled
                    ? "#555"
                    : "rgba(255,255,255,0.75)",
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
