export default function MenuButton({ menuOpen, scrolled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-end gap-1.5 h-9 w-9 rounded-xl border p-2 active:scale-95 transition-all"
      style={{
        borderColor: scrolled ? "#e5e7eb" : "rgba(255,255,255,0.4)",
        backgroundColor: scrolled ? "#fff" : "transparent",
        transition: "border-color 0.3s ease, background-color 0.3s ease",
      }}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <span
        className="w-5 h-0.5 rounded block transition-all duration-300 origin-center"
        style={{
          backgroundColor: scrolled ? "var(--color-forest)" : "#fff",
          transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
        }}
      />
      <span
        className="w-3.5 h-0.5 rounded block transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--color-forest)" : "#fff",
          opacity: menuOpen ? 0 : 1,
          transform: menuOpen ? "scaleX(0)" : "none",
        }}
      />
      <span
        className="w-5 h-0.5 rounded block transition-all duration-300 origin-center"
        style={{
          backgroundColor: scrolled ? "var(--color-forest)" : "#fff",
          transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
          opacity: menuOpen ? 1 : 0,
          marginTop: menuOpen ? 0 : "-6px",
          position: menuOpen ? "relative" : "absolute",
        }}
      />
    </button>
  );
}
