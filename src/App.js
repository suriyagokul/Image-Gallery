import React, { useState, useEffect } from "react";
import ShowData from "./components/ShowData";
import Pagination from "./components/Pagination";
import data from "./data.json";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(9);

  const lastIndexOfImage = currentPage * imagesPerPage; // 1 * 9 = 9
  const firstIndexOfImage = lastIndexOfImage - imagesPerPage; // 9 - 9 = 0

  const items = data.ImageGallery.slice(firstIndexOfImage, lastIndexOfImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setImagesPerPage(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="z-0 mt-20">
        <ShowData items={items} />
        <Pagination
          totalImages={data.ImageGallery.length}
          ImagesPerPage={imagesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
