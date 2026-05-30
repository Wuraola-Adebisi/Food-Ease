import { FaPinterestP } from "react-icons/fa";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../constants";

function renderIcon(label) {
  if (label === "Instagram") return <FiInstagram size={16} />;
  if (label === "Pinterest") return <FaPinterestP size={16} />;
  return <FiYoutube size={16} />;
}

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      {SOCIAL_LINKS.map((label) => (
        <a
          key={label}
          href="#"
          className="h-9 w-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 active:scale-95 transition-all duration-200"
          onMouseEnter={(event) => {
            event.currentTarget.style.backgroundColor = "var(--color-forest)";
            event.currentTarget.style.color = "#fff";
            event.currentTarget.style.borderColor = "var(--color-forest)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.backgroundColor = "#fff";
            event.currentTarget.style.color = "#6b7280";
            event.currentTarget.style.borderColor = "#e5e7eb";
          }}
          aria-label={label}
        >
          {renderIcon(label)}
        </a>
      ))}
    </div>
  );
}
