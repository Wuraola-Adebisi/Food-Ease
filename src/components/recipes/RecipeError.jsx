export default function RecipeError({ message, onRetry }) {
  return (
    <section
      id="recipes"
      className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-center gap-3"
    >
      <p className="font-sans text-base text-red-400">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
        style={{
          borderColor: "var(--color-forest)",
          color: "var(--color-forest)",
        }}
      >
        Try again
      </button>
    </section>
  );
}
