export default function FooterLinks({ links, title }) {
  return (
    <div className="space-y-4 text-left">
      <h3
        className="text-base font-semibold tracking-wider uppercase"
        style={{ fontFamily: "var(--font-sans)", color: "#111" }}
      >
        {title}
      </h3>
      <ul className="space-y-2 list-none p-0 m-0 text-base">
        {links.map((label) => (
          <li key={label}>
            <a
              href="#"
              className="transition-colors"
              style={{ color: "#777" }}
              onMouseEnter={(event) => {
                event.target.style.color = "var(--color-forest)";
              }}
              onMouseLeave={(event) => {
                event.target.style.color = "#777";
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
