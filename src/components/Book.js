import React from "react";
import "./Book.css";

function Book ({checked, author, title, PublishYear, PageCount}) {

    console.log(PageCount)
    const [pageCount, setPageCount] = React.useState(PageCount)

    React.useEffect(() => {
        if(pageCount == undefined) {
            setPageCount("N/A")
        }
    },[PageCount])

    // console.log(checked)
    // console.log(author, title, PublishYear, PageCount)
    return (
        <div className="Book">
            <div className="BookBox">
                      
                        <p><span>Author</span>: {author}</p>
                        <p><span>Title</span>: {title}</p>
                        <p><span>Publish Year</span>: {PublishYear}</p>
                        <p><span>Page Count</span>: {pageCount}</p>
                    
             {/* //1. Pass the 4 authors in - DONE 2. Pass the 4 data points for each author -- DONE 3. Display the right author with the right data points depending on checked value
              //1.Title 2. Author 3. Page Count 4. Publish Date -- For all within each page
              //AFTERWARDS: Depending on the author display chosen page
               */}
            </div>
        </div>
    )
}

export default Book