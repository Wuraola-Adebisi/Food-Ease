import { FiX } from "react-icons/fi";
import { NAV_LINKS } from "../../constants";
import BrandLogo from "../shared/BrandLogo";
import IconButton from "../shared/IconButton";

export default function MobileMenu({ menuOpen, onClose, onOpenSubscribe }) {
  return (
    <>
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col"
        style={{
          width: "min(320px, 85vw)",
          backgroundColor: "#fff",
          boxShadow: "-8px 0 32px rgba(0,0,0,0.12)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "#f0f0ee" }}
        >
          <BrandLogo />
          <IconButton ariaLabel="Close menu" onClick={onClose}>
            <FiX size={16} />
          </IconButton>
        </div>

        <div
          className="flex flex-col px-4 pt-4 gap-1"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-base font-medium transition-colors"
              style={{ color: "#111" }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor = "#f5f5f3";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div
          className="mt-auto px-6 pb-8 pt-4 border-t"
          style={{ borderColor: "#f0f0ee" }}
        >
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenSubscribe();
            }}
            className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] hover:opacity-90"
            style={{
              backgroundColor: "var(--color-forest)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Subscribe to FoodEase
          </button>
        </div>
      </div>
    </>
  );
}
