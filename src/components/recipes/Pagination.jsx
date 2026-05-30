export default function Pagination({ currentPage, onPageChange, totalPages }) {
  if (totalPages <= 1) return null;

  return (
    <div
      className="mt-8 flex items-center justify-center gap-2"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <button
        type="button"
        className="rounded px-4 py-2 text-base border border-gray-200 disabled:opacity-40 transition-colors duration-200 hover:bg-gray-50"
        style={{ color: "#555" }}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className="px-4 py-2 text-base rounded border transition-colors duration-200"
            style={
              page === currentPage
                ? {
                    backgroundColor: "var(--color-forest)",
                    color: "#fff",
                    borderColor: "var(--color-forest)",
                  }
                : {
                    backgroundColor: "#fff",
                    color: "#555",
                    borderColor: "#e5e7eb",
                  }
            }
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        className="rounded px-4 py-2 text-base border border-gray-200 disabled:opacity-40 transition-colors duration-200 hover:bg-gray-50"
        style={{ color: "#555" }}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
