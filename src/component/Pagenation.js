import React from "react";

const Pagenation = ({ perPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ placeContent: "center" }}>
        <li
          className="page-link"
          onClick={() => paginate(pageNumbers[0])}
          style={{ cursor: "pointer" }}
        >
          {"<<"}
        </li>
        <li
          className="page-link"
          onClick={() =>
            paginate(
              currentPage === pageNumbers[0] ? currentPage : currentPage - 1
            )
          }
          style={{ cursor: "pointer" }}
        >
          {"<"}
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="page-link"
            style={{ cursor: "pointer" }}
          >
            {number}
          </li>
        ))}
        <li
          className="page-link"
          onClick={() =>
            paginate(
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? currentPage
                : currentPage + 1
            )
          }
          style={{ cursor: "pointer" }}
        >
          {">"}
        </li>
        <li
          className="page-link"
          onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
          style={{ cursor: "pointer" }}
        >
          {">>"}
        </li>
      </ul>
    </nav>
  );
};

export default Pagenation;
