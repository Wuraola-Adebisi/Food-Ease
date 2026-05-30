import { FiInstagram, FiYoutube } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { CATEGORIES } from "../App";

export default function Footer({ onCategorySelect }) {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-gray-50/70" style={{ fontFamily: "var(--font-sans)", color: "#555" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

      
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <span
                className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:rotate-12"
                style={{ backgroundColor: "var(--color-forest)", fontFamily: "var(--font-serif)" }}
              >
                F
              </span>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-serif)", color: "#111" }}>
                Food<span style={{ color: "var(--color-forest)" }}>Ease</span>
              </span>
            </a>
            <p className="text-base max-w-xs" style={{ color: "#777" }}>
              Good food shouldn't be complicated. We make it easy to cook well, eat well, and enjoy every bite.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FiInstagram size={16} />, label: "Instagram" },
                { icon: <FaPinterestP size={16} />, label: "Pinterest" },
                { icon: <FiYoutube size={16} />, label: "YouTube" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="h-9 w-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 active:scale-95 transition-all duration-200"
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-forest)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--color-forest)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

         
          <div className="space-y-4 text-left">
            <h3 className="text-base font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-sans)", color: "#111" }}>
              Explore
            </h3>
            <ul className="space-y-2 list-none p-0 m-0 text-base">
              {["Latest Recipes", "Popular Categories", "Cooking Tips", "Meal Planner"].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ color: "#777" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--color-forest)")}
                    onMouseLeave={(e) => (e.target.style.color = "#777")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div className="space-y-4 text-left">
            <h3 className="text-base font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-sans)", color: "#111" }}>
              Categories
            </h3>
            <ul className="space-y-2 list-none p-0 m-0 text-base">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onCategorySelect(cat)}
                    className="transition-colors bg-transparent border-none cursor-pointer p-0 text-base"
                    style={{ color: "#777", fontFamily: "var(--font-sans)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-forest)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

    
          <div className="space-y-4 text-left">
            <h3 className="text-base font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-sans)", color: "#111" }}>
              Stay Inspired
            </h3>
            <p className="text-base" style={{ color: "#777" }}>
              New recipes, seasonal menus, and kitchen tips — straight to your inbox, every week.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:border sm:border-gray-200 sm:rounded-full sm:bg-white sm:p-1 focus-within:border-gray-400 transition-colors duration-200"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-base text-gray-800 placeholder-gray-400 focus:outline-none sm:border-none sm:py-1 focus:ring-0"
                style={{ fontFamily: "var(--font-sans)" }}
              />
              <button
                type="submit"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white active:scale-95 transition-all"
                style={{ backgroundColor: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
              >
                Join
              </button>
            </form>
          </div>

        </div>

  
        <div className="mt-16 border-t border-gray-200/60 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm" style={{ color: "#999", fontFamily: "var(--font-sans)" }}>
          <p>© {new Date().getFullYear()} FoodEase Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((label) => (
              <a
                key={label}
                href="#"
                className="transition-colors"
                style={{ color: "#999" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-forest)")}
                onMouseLeave={(e) => (e.target.style.color = "#999")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
