import { useState } from "react";

export function usePagination(items = [], itemsPerPage = 10, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  const itemsOnCurrentPage = items.slice(startIndex, endIndex + 1);

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  const setPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const next = () => {
    if (canNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (canPrevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    next,
    prev,
    canNextPage,
    canPrevPage,
  };
}



