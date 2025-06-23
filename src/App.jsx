import UsePagination from "./components/UsePagination";

import "./App.css";
const items = Array.from(
  {
    length: 95,
  },
  (_, i) => `items ${i + 1}`
);

console.log(items);
function App() {
  const {
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
  } = UsePagination(items);

  return (
    <>
      <h2>Custom Hooks</h2>
      {itemsOnCurrentPage.map((item, i) => (
        <li key={i}>{item}</li>
      ))}

      <h3>
        Page {currentPage} of {totalPages}
      </h3>
      <button onClick={next}>Next</button>
      <button onClick={prev}>Previous</button>
    </>
  );
}

export default App;
