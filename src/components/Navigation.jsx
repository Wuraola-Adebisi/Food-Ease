import { useState, useEffect, useRef } from "react";
import { CATEGORIES } from "../App";

export default function Navigation({ activeCategory, onCategorySelect }) {
  const [scrolled, setScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setOpacity(Math.min(y / 80, 1));
      setScrolled(y > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSubscribeOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full py-5"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          backdropFilter: opacity > 0.5 ? "blur(12px)" : "none",
          boxShadow: opacity > 0.9 ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">

          <a href="#" className="flex items-center gap-2 group">
            <span
              className="text-xl font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-serif)",
                color: scrolled ? "#111" : "#fff",
                transition: "color 0.5s ease",
              }}
            >
              Food
              <span style={{
                color: scrolled ? "var(--color-forest)" : "rgba(255,255,255,0.75)",
                transition: "color 0.5s ease",
              }}>
                Ease
              </span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0 text-base font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            <li>
              <a
                href="#"
                className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                style={{ color: scrolled ? "#111" : "#fff", transition: "color 0.5s ease" }}
              >
                Home
              </a>
            </li>

            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen((v) => !v)}
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
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  style={{
                    transition: "transform 0.2s ease",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    marginTop: "1px",
                  }}
                >
                  <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  width: "200px",
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)",
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
                <div style={{ position: "absolute", top: "-6px", left: "50%", transform: "translateX(-50%)", width: "12px", height: "6px", overflow: "hidden" }}>
                  <div style={{ width: "10px", height: "10px", background: "#fff", transform: "rotate(45deg)", margin: "3px auto 0", boxShadow: "-1px -1px 3px rgba(0,0,0,0.06)" }} />
                </div>

                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => { onCategorySelect(cat); setDropdownOpen(false); }}
                      className="w-full text-left block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 border-none cursor-pointer"
                      style={{
                        backgroundColor: isActive ? "var(--color-forest)" : "transparent",
                        color: isActive ? "#fff" : "#333",
                        fontFamily: "var(--font-sans)",
                      }}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = "#f5f5f3"; e.currentTarget.style.color = "var(--color-forest)"; } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#333"; } }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </li>

            {["About Us", "Contact"].map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                  style={{ color: scrolled ? "#555" : "rgba(255,255,255,0.75)", transition: "color 0.3s ease" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => { setSubscribeOpen(true); setSubmitted(false); setEmail(""); }}
              className="hidden sm:inline-flex rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 active:scale-95 hover:opacity-90"
              style={{ backgroundColor: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
            >
              Subscribe
            </button>
            <button
              className="md:hidden flex flex-col justify-center items-end gap-1.5 h-9 w-9 rounded-xl border p-2 active:scale-95 transition-all"
              style={{
                borderColor: scrolled ? "#e5e7eb" : "rgba(255,255,255,0.4)",
                backgroundColor: scrolled ? "#fff" : "transparent",
                transition: "border-color 0.3s ease, background-color 0.3s ease",
              }}
              aria-label="Toggle Menu"
            >
              <span className="w-5 h-0.5 rounded" style={{ backgroundColor: scrolled ? "var(--color-forest)" : "#fff", transition: "background-color 0.3s ease" }} />
              <span className="w-3.5 h-0.5 rounded" style={{ backgroundColor: scrolled ? "var(--color-forest)" : "#fff", transition: "background-color 0.3s ease" }} />
            </button>
          </div>
        </div>
      </nav>

  
      {subscribeOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setSubscribeOpen(false); }}
        >
          <div className="relative w-full max-w-md rounded-2xl p-8 bg-white" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
            <button
              onClick={() => setSubscribeOpen(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
              style={{ color: "#999" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f3"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-5" style={{ backgroundColor: "var(--color-forest)", fontFamily: "var(--font-serif)" }}>F</div>
                <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-serif)", color: "#111" }}>Get recipes in your inbox</h2>
                <p className="text-sm mb-6" style={{ color: "#777", fontFamily: "var(--font-sans)" }}>Weekly picks, seasonal finds, and kitchen inspiration — no spam, ever.</p>
                <form onSubmit={handleSubscribeSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all"
                    style={{ fontFamily: "var(--font-sans)", color: "#111" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-forest)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(74,103,65,0.1)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                  <button type="submit" className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] hover:opacity-90" style={{ backgroundColor: "var(--color-forest)", fontFamily: "var(--font-sans)" }}>
                    Subscribe →
                  </button>
                </form>
                <p className="text-xs text-center mt-4" style={{ color: "#bbb", fontFamily: "var(--font-sans)" }}>Unsubscribe anytime. We respect your inbox.</p>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-4 gap-4">
                <div className="h-14 w-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,103,65,0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7L23 7" stroke="var(--color-forest)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-serif)", color: "#111" }}>You're in!</h2>
                <p className="text-sm" style={{ color: "#777", fontFamily: "var(--font-sans)" }}>Welcome to FoodEase. Your first recipe drop lands soon.</p>
                <button onClick={() => setSubscribeOpen(false)} className="mt-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95" style={{ backgroundColor: "var(--color-forest)", fontFamily: "var(--font-sans)" }}>
                  Back to recipes
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
