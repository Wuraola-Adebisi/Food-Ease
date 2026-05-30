export default function FooterNewsletter() {
  return (
    <div className="space-y-4 text-left">
      <h3
        className="text-base font-semibold tracking-wider uppercase"
        style={{ fontFamily: "var(--font-sans)", color: "#111" }}
      >
        Stay Inspired
      </h3>
      <p className="text-base" style={{ color: "#777" }}>
        New recipes, seasonal menus, and kitchen tips - straight to your inbox,
        every week.
      </p>
      <form
        onSubmit={(event) => event.preventDefault()}
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
          style={{
            backgroundColor: "var(--color-forest)",
            fontFamily: "var(--font-sans)",
          }}
        >
          Join
        </button>
      </form>
    </div>
  );
}
