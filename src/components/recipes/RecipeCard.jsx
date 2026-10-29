import { useState } from "react";
import { FiBookOpen, FiHeart } from "react-icons/fi";

export default function RecipeCard({
  area,
  category,
  description,
  image,
  isSaved = false,
  onOpen,
  onToggleSaved,
  tags = [],
  title,
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_14px_35px_rgba(30,40,25,0.08)]">
      <div className="relative">
        {image && !imageFailed ? (
          <img
            src={image}
            alt={title || "Recipe"}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-56 w-full object-cover"
          />
        ) : (
          <div className="flex h-56 w-full items-center justify-center bg-[var(--color-forest-wash)] px-6 text-center font-serif text-lg text-[var(--color-forest)]">
            {title || "Recipe image unavailable"}
          </div>
        )}
        <button
          type="button"
          onClick={() => onToggleSaved?.()}
          aria-label={isSaved ? `Remove ${title} from saved recipes` : `Save ${title}`}
          aria-pressed={isSaved}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/95 text-stone-700 shadow-sm transition hover:scale-105 hover:text-[var(--color-forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
        >
          <FiHeart aria-hidden="true" className={isSaved ? "fill-current text-[var(--color-forest)]" : ""} size={18} />
        </button>
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {category && (
            <span className="rounded-full bg-[var(--color-forest-wash)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]">
              {category}
            </span>
          )}
          {area && (
            <span className="text-xs font-medium text-stone-500">
              {area} cuisine
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="text-left font-serif text-lg font-bold leading-snug text-stone-900 transition-colors hover:text-[var(--color-forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] sm:text-xl"
        >
          {title}
        </button>

        {description && (
          <p className="line-clamp-3 text-sm leading-6 text-stone-600">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-stone-100 pt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-stone-50 px-2 py-1 text-xs text-stone-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto border-t border-stone-100 pt-4">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex min-h-10 items-center gap-2 text-sm font-bold text-[var(--color-forest)] transition-colors hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
          >
            <FiBookOpen aria-hidden="true" size={16} />
            View recipe
          </button>
        </div>
      </div>
    </article>
  );
}
