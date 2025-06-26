





import { usePagination } from "./usePagination"; 

// Simulate 95 items
const allItems = Array.from({ length: 95 }, (_, i) => `Item ${i + 1}`);

export default function PaginationDemo() {
  const {
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
  } = usePagination(allItems, 10); 

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Pagination Demo</h2>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {itemsOnCurrentPage.map((item) => (
          <li key={item} style={{ padding: "0.25rem 0" }}>
            {item}
          </li>
        ))}
      </ul>

      <div style={{ margin: "1rem 0" }}>
        <button onClick={prev} disabled={!canPrevPage}>
          Previous
        </button>

        <span style={{ margin: "0 1rem" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={next} disabled={!canNextPage}>
          Next
        </button>
      </div>

      <p>
        Showing items {startIndex + 1} to {endIndex + 1} (
        {itemsOnCurrentPage.length} items on this page)
      </p>

      <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}