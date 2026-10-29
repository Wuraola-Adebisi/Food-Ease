import { useEffect, useMemo, useRef, useState } from "react";
import { FiCheck, FiHeart, FiX } from "react-icons/fi";

function getIngredients(recipe) {
  if (!recipe) return [];

  return Array.from({ length: 20 }, (_, index) => {
    const ingredient = recipe[`strIngredient${index + 1}`]?.trim();
    const measure = recipe[`strMeasure${index + 1}`]?.trim();

    if (!ingredient) return null;
    return {
      id: `${index + 1}-${ingredient.toLowerCase()}`,
      name: ingredient,
      measure: measure && measure.toLowerCase() !== ingredient.toLowerCase() ? measure : "",
    };
  }).filter(Boolean);
}

function getInstructions(instructions = "") {
  const normalized = instructions
    .replace(/\r/g, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\n{2,}/g, "\n")
    .trim();

  const lines = normalized
    .split("\n")
    .map((line) => line.replace(/^\s*(?:step\s*)?\d+[.)\-:]\s*/i, "").trim())
    .filter(Boolean);

  if (lines.length > 1) return lines;

  return normalized
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map((step) => step.trim())
    .filter(Boolean);
}

export default function RecipeDetailModal({
  recipe,
  isSaved,
  onClose,
  onToggleSaved,
}) {
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const ingredients = useMemo(() => getIngredients(recipe), [recipe]);
  const instructions = useMemo(
    () => getInstructions(recipe?.strInstructions || ""),
    [recipe]
  );

  useEffect(() => {
    if (!recipe) return undefined;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setCheckedIngredients([]);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const dialog = event.currentTarget.querySelector("[data-dialog-content]");
      const focusable = dialog?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  const image = recipe.strMealThumb;
  const checkedCount = checkedIngredients.length;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-stone-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-detail-title"
        data-dialog-content
        className="relative flex max-h-[95dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4 sm:px-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-forest)]">
            Recipe details
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSaved(recipe.idMeal)}
              aria-pressed={isSaved}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-stone-200 px-3 text-sm font-semibold text-stone-700 transition hover:border-[var(--color-forest)] hover:text-[var(--color-forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
            >
              <FiHeart aria-hidden="true" className={isSaved ? "fill-current text-[var(--color-forest)]" : ""} />
              <span>{isSaved ? "Saved" : "Save recipe"}</span>
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close recipe details"
              className="flex h-10 w-10 items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
            >
              <FiX size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-stone-100">
              {image ? (
                <img
                  src={image}
                  alt={recipe.strMeal || "Recipe"}
                  className="h-56 w-full object-cover sm:h-72 md:sticky md:top-0 md:h-full md:max-h-[70vh]"
                />
              ) : (
                <div className="flex h-56 items-center justify-center text-sm text-stone-500 sm:h-72">
                  Image unavailable
                </div>
              )}
              <div className="space-y-2 px-5 py-5 sm:px-7">
                <div className="flex flex-wrap gap-2">
                  {recipe.strCategory && (
                    <span className="rounded-full bg-[var(--color-forest-wash)] px-3 py-1 text-xs font-semibold text-[var(--color-forest)]">
                      {recipe.strCategory}
                    </span>
                  )}
                  {recipe.strArea && (
                    <span className="rounded-full bg-stone-200/70 px-3 py-1 text-xs font-medium text-stone-600">
                      {recipe.strArea} cuisine
                    </span>
                  )}
                </div>
                {recipe.strSource && (
                  <a
                    href={recipe.strSource}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-semibold text-[var(--color-forest)] underline decoration-[var(--color-forest)]/30 underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
                  >
                    View original recipe
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-8 px-5 py-6 sm:px-7 sm:py-8">
              <div>
                <h2 id="recipe-detail-title" className="font-serif text-2xl font-bold leading-tight text-stone-950 sm:text-3xl">
                  {recipe.strMeal}
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Check off ingredients as you gather them, then work through the cooking steps below.
                </p>
              </div>

              <section aria-labelledby="ingredients-heading">
                <div className="mb-3 flex items-end justify-between gap-3">
                  <h3 id="ingredients-heading" className="font-serif text-xl font-bold text-stone-900">
                    Ingredients
                  </h3>
                  <span className="text-xs text-stone-500">
                    {checkedCount} of {ingredients.length} ready
                  </span>
                </div>
                {ingredients.length ? (
                  <ul className="space-y-2">
                    {ingredients.map((ingredient) => {
                      const checked = checkedIngredients.includes(ingredient.id);
                      return (
                        <li key={ingredient.id}>
                          <label className={`flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 transition ${checked ? "border-[var(--color-forest)]/20 bg-[var(--color-forest-wash)] text-stone-500" : "border-stone-100 hover:border-stone-200"}`}>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => setCheckedIngredients((current) =>
                                checked
                                  ? current.filter((id) => id !== ingredient.id)
                                  : [...current, ingredient.id]
                              )}
                              className="mt-1 h-4 w-4 accent-[var(--color-forest)]"
                            />
                            <span className={`flex-1 text-sm leading-5 ${checked ? "line-through" : "text-stone-800"}`}>
                              {ingredient.name}
                            </span>
                            {ingredient.measure && (
                              <span className="max-w-[45%] text-right text-sm leading-5 text-stone-500">
                                {ingredient.measure}
                              </span>
                            )}
                            {checked && <FiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--color-forest)]" />}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="rounded-xl bg-stone-50 p-4 text-sm text-stone-600">
                    Ingredient details are not available for this recipe.
                  </p>
                )}
              </section>

              <section aria-labelledby="instructions-heading">
                <h3 id="instructions-heading" className="mb-4 font-serif text-xl font-bold text-stone-900">
                  Method
                </h3>
                {instructions.length ? (
                  <ol className="space-y-4">
                    {instructions.map((step, index) => (
                      <li key={`${index}-${step.slice(0, 24)}`} className="flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest-wash)] text-xs font-bold text-[var(--color-forest)]">
                          {index + 1}
                        </span>
                        <p className="flex-1 pt-0.5 text-sm leading-6 text-stone-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm leading-6 text-stone-600">
                    Cooking instructions are not available for this recipe.
                  </p>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
