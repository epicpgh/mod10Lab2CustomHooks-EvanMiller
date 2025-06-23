import { useState } from "react";

function UsePagination(items = [], itemsPerPage = 10, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const itemsOnCurrentPage = items.slice(startIndex, endIndex);
  const setPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const next = () => {
    if (currentPage < totalPages) {
      console.log("next");
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 1) {
      console.log("prev");
      setCurrentPage(currentPage - 1);
    }
  };
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    prev,
    next,
    setPage,
    itemsPerPage,
    initialPage,
    itemsOnCurrentPage,
  };
}

export default UsePagination;

// const controller = new AbortController(); // For cleanup
// setData(null); // Reset data on new fetch
// setError(null); // Reset error on new fetch
// setLoading(true);
