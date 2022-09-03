import React from "react";
import "./Pagination.css"
import Book from "./Book.js"

function Pagination({ sortedBooks, pageLimit, dataLimit }) {

    const [pages] = React.useState(Math.round(sortedBooks.length / dataLimit));
    const [currentPage, setCurrentPage] = React.useState(1);
    React.useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]);
  
    function goToNextPage() {
      setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
       setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
       const pageNumber = Number(event.target.textContent)
       setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
       const startIndex = currentPage * dataLimit - dataLimit;
       const endIndex = startIndex + dataLimit;
       return sortedBooks.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
       let start = Math.floor((currentPage - 1) / pageLimit * pageLimit);
       return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    return (


<div className="Results">
            <div className="ResultsBox">
 
           
      {getPaginatedData().map((item) => {
        console.log(item.key)
        return (
<div key={item.key}>
        <Book id={item.key} coverId={item.cover_i} author={item.author_name} title={item.title} PublishYear={item.first_publish_year} PageCount={item.number_of_pages_median} />
        </div>
        
        )

      }
        
        
      )}

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
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
    </div>
        </div>

    )
  }

  export default Pagination;