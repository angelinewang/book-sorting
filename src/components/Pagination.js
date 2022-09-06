import React from "react";
import "./Pagination.css";
import Book from "./Book.js";

function Pagination({ sortedBooks, pageLimit, dataLimit }) {
  const [pages] = React.useState(Math.round(sortedBooks.length / dataLimit));
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  const [headShot, setHeadShot] = React.useState("")

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return sortedBooks.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor(((currentPage - 1) / pageLimit) * pageLimit);
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  console.log(getPaginatedData());

  return (
    <div className="Results">
      <div className="ResultsBox">
        {getPaginatedData().map((item) => {
          console.log(item.key);

          // if(item.author_name[0].includes("Tolkien")) {
          //   console.log(item.author_name)
          //   setHeadShot("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg/1200px-J._R._R._Tolkien%2C_ca._1925.jpg")
          // }
        
          // else if (item.author_name[0].includes("Tolstoy")) {
          //   console.log(item.author_name)
          //   setHeadShot("https://upload.wikimedia.org/wikipedia/commons/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg")
          // }
        
          // else if (item.author_name[0].includes("Brown")) {
          //   console.log(item.author_name)
          //   setHeadShot("https://upload.wikimedia.org/wikipedia/commons/8/8b/Dan_Brown_bookjacket_cropped.jpg")
          // }
        
          // else if (item.author_name[0].includes("Rowling")) {
          //   console.log(item.author_name)
          //   setHeadShot("https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg")
          // }
          // console.log(headShot)
          return (
            <div key={item.key}>
              <Book
              // headShot={headShot}
                id={item.key.substring(7, item.key.length)}
                coverId={item.cover_i}
                author={item.author_name}
                title={item.title}
                PublishYear={item.first_publish_year}
                PageCount={item.number_of_pages_median}
              />
            </div>
          );
        })}

        {/* {
              sortedBooks.map((item) => {
                    // if (sortedBooks.indexOf(item) < 5) {
                        return (
                            <div key={item.key}>
                            <Book coverId={item.cover_i} author={item.author_name} title={item.title} PublishYear={item.first_publish_year} PageCount={item.number_of_pages_median}/>
                            </div>
                        )
                    // }
                })
                
            } */}

        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
