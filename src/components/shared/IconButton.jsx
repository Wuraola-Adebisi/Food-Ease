export default function IconButton({ ariaLabel, children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${className}`}
      style={{ color: "#999" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f5f5f3";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
