

import React from 'react';
import "./Results.css";
import Book from './Book.js';

function Results ({checkedState, books}) {
// console.log(books.sort((a,b) => a.first_publish_year - b.first_publish_year))
    const [sortedBooks, setSortedBooks] = React.useState(books)

    React.useEffect(() => {
        if(checkedState.selectedOption === 0) {
            const updatedBooks = [...books].sort((a,b) => a.first_publish_year - b.first_publish_year)
            setSortedBooks(updatedBooks)
            // setSortedBooks(books => {
            //     const updatedBooks = [...books]
            //     updatedBooks.sort((a,b) => a.first_publish_year - b.first_publish_year)
            //     console.log(`We are here: ${JSON.stringify(updatedBooks)}`)
            //         return updatedBooks
            //     })
            // console.log(sortByDate)
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
        
    // console.log(books)
   //1. Check that default array displays 2. Check that Publish Year array displays 3. Check that Title array displays 4. Check that Page count array displays
    console.log(`These are checked: ${checkedState}`)
    return(
        <div className="Results">
            <div className="ResultsBox">
            <p>Results Component</p>
            {
              sortedBooks.map((item) => {
                    if (sortedBooks.indexOf(item) < 10) {
                        return (
                            <div key={item.key}>
                            <p>Sorting by Page Count</p>
                            <p>Index is {sortedBooks.indexOf(item) + 1}</p>
                            <Book author={item.author_name} title={item.title} PublishYear={item.first_publish_year} PageCount={item.number_of_pages_median}/>
                            </div>
                        )
                    }
                })
                
            }
            
            </div>
        </div>
    )



}

export default Results;

