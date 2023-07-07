import React from "react";

export default function Pagination({
  totalImages,
  ImagesPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalImages / ImagesPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        const className = `px-4 py-2 drop-shadow-md mr-3 mb-10 mt-5 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600 hover:scale-105 duration-200 ${
          page == currentPage ? "bg-green-500  hover:bg-green-600" : ""
        }`;
        return (
          <button
            key={index}
            className={className}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
