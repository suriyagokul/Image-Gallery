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
        // const styling = `px-4 py-2 drop-shadow-md mr-3 mb-10 mt-5 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600 hover:scale-105 duration-200 ${
        //   page == currentPage ? "bg-green-500  hover:bg-green-600" : ""
        // }`;

        const classNames = [
          "px-4",
          "py-2",
          "drop-shadow-md",
          "mr-3",
          "mb-10",
          "mt-5",
          "text-white",
          "rounded-sm",
          "hover:scale-105",
          "duration-200",
        ];

        if (page === currentPage) {
          classNames.push("bg-green-500", "hover:bg-green-600");
        } else {
          classNames.push("bg-indigo-500", "hover:bg-indigo-600");
        }

        const styling = classNames.join(" ");

        return (
          <button
            key={index}
            className={styling}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
