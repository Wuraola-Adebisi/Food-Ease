import { useMemo, useState } from "react";

export function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const visiblePage = Math.min(currentPage, totalPages);

  const pageItems = useMemo(() => {
    const start = (visiblePage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, itemsPerPage, visiblePage]);

  const resetPage = () => {
    setCurrentPage(1);
  };

  return {
    currentPage: visiblePage,
    pageItems,
    resetPage,
    setCurrentPage,
    totalPages,
  };
}
