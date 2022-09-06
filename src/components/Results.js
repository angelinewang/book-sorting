import React from "react";
import "./Results.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Pagination from "./Pagination";

function Results({ checkedState, books }) {
  const [sortedBooks, setSortedBooks] = React.useState(books);

    React.useEffect(() => {
        if(checkedState.selectedOption === 0) {
            const updatedBooks = [...sortedBooks].sort((a,b) => a.first_publish_year - b.first_publish_year)
            setSortedBooks(updatedBooks)
        }
        else if(checkedState.selectedOption === 1) {
            setSortedBooks([...sortedBooks].sort((a,b) => a.number_of_pages_median - b.number_of_pages_median));
        }
    
        else if(checkedState.selectedOption === 2) {
            setSortedBooks([...sortedBooks].sort(function(a, b) {
                let textA = a.title.toUpperCase().trim().replace('"', "");
                let textB = b.title.toUpperCase().trim().replace('"', "");
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            }));
        }

        else {
            setSortedBooks(books)
        }
    
    }, [books, checkedState]);
  
    console.log(`These are checked: ${checkedState}`)
    return(
        <>
        {sortedBooks.length > 0 ? (
            <>
            <Pagination sortedBooks={sortedBooks} dataLimit={5} pageLimit={5} />
        
        </>
        ) : (<h1>No Books to display</h1>)
    
    }
           
        </>
    )



}

export default Results;
