import { useState, useMemo } from "react";
import { useDebounce } from "./components/useDebounce";
import { usePagination } from "./components/usePagination";
import "./App.css";

const allItems = Array.from({ length: 95 }, (_, i) => `Item ${i + 1}`);

function App() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 500);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) =>
      item.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    prev,
    next,
    setPage,
    canPrevPage,
    canNextPage,
  } = usePagination(filteredItems, 10);

  return (
    <>
      <h1>Debounced Search + Pagination</h1>

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />

      <ul>
        {itemsOnCurrentPage.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {filteredItems.length > 0 ? (
        <>
          <div>
            <button onClick={prev} disabled={!canPrevPage}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={next} disabled={!canNextPage}>
              Next
            </button>
          </div>

          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>

          <p>
            Showing {startIndex + 1} to {endIndex + 1} of {filteredItems.length}
          </p>
        </>
      ) : (
        <p>No matching items</p>
      )}
    </>
  );
}

export default App;
