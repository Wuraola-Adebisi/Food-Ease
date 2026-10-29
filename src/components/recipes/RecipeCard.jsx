export default function RecipeCard({
  area,
  category,
  description,
  image,
  tags = [],
  title,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_14px_35px_rgba(30,40,25,0.08)]">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-56 w-full object-cover"
      />
      <div className="space-y-4 p-5 sm:p-6">
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

        <h2 className="font-serif text-lg font-bold leading-snug text-stone-900 transition-colors group-hover:text-[var(--color-forest)] sm:text-xl">
          {title}
        </h2>

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
      </div>
    </article>
  );
}
