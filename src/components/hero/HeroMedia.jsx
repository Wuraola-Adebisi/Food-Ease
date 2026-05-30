import { HERO_VIDEO_URL } from "../../constants";
import { scrollToRecipes } from "../../utils/scroll";

export default function HeroMedia() {
  return (
    <div
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: "100vh" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ filter: "brightness(0.6) saturate(1.2)" }}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 gap-4">
        <p
          className="text-xs font-bold tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Thousands of recipes, one place
        </p>
        <h1 className="text-center font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-2xl">
          Real food, made for real kitchens.
        </h1>
        <button
          type="button"
          onClick={scrollToRecipes}
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 active:scale-95"
          onMouseEnter={(event) => {
            event.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Browse Recipes -&gt;
        </button>
      </div>
    </div>
  );
}
