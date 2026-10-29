import { HERO_VIDEO_URL } from "../../constants";
import { scrollToRecipes } from "../../utils/scroll";

export default function HeroMedia() {
  return (
    <div
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: "min(100svh, 900px)", minHeight: "560px" }}
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
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.18) 0%, rgba(0,0,0,.56) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <p
          className="text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Thousands of recipes, one place
        </p>
        <h1 className="max-w-3xl text-center font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Real food, made for real kitchens.
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
          Find something worth making, from quick weeknight meals to a new
          favourite.
        </p>
        <button
          type="button"
          onClick={scrollToRecipes}
          className="hero-browse-button mt-2 inline-flex items-center justify-center rounded-full border px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.98]"
        >
          Browse recipes
        </button>
      </div>
    </div>
  );
}
