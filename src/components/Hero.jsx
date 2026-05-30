export default function Hero() {
  return (
    <section className="w-full bg-white text-black">
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
          <source
            src="https://res.cloudinary.com/dnkfg07ov/video/upload/v1780025498/videoplayback_or0dqy.mp4"
            type="video/mp4"
          />
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
            onClick={() =>
              document
                .getElementById("recipes")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 active:scale-95"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Browse Recipes →
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 mt-12 items-center border-b border-gray-100 p-12">
        <div className="flex flex-col gap-4">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--color-forest)" }}
          >
            Today's Pick
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black leading-snug">
            Crispy skin, smoky heat, and a sauce worth licking off the spoon.
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#777", fontFamily: "var(--font-sans)" }}
          >
            Blackened chicken thighs, charred corn salsa, pickled jalapeños,
            smoked paprika butter, served over coconut rice.
          </p>
          <div
            className="flex gap-5"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "#777",
            }}
          >
            <span>
              <span
                className="font-semibold"
                style={{ color: "var(--color-forest)" }}
              >
                Prep:
              </span>{" "}
              25 mins
            </span>
            <span>
              <span
                className="font-semibold"
                style={{ color: "var(--color-forest)" }}
              >
                Difficulty:
              </span>{" "}
              Medium
            </span>
          </div>
          <div>
            <button
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 active:scale-95"
              style={{
                borderColor: "var(--color-forest)",
                color: "var(--color-forest)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-forest)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-forest)";
              }}
            >
              Get Recipe →
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-[3/3] bg-gray-100">
          <img
            src="https://res.cloudinary.com/dnkfg07ov/image/upload/v1780102250/Street_Corn_Chicken_Rice_Bowl_Recipe_ras4md.jpg"
            alt="Today's pick."
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
