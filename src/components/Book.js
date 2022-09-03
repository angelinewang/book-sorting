import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

function Book({ checked, author, title, PublishYear, PageCount, coverId }) {
  console.log(checked);
  console.log(author, title, PublishYear, PageCount);
  return (
    <div className="Book">
      <Link
        to={`./BookDetails/${title}`}
        author={author}
        title={title}
        PublishYear={PublishYear}
        PageCount={PageCount}
        coverId={coverId}
        key={title}
      >
        <div className="BookBox">
          <p>Author: {author}</p>
          <p>Title: {title}</p>
          <p>Publish Year: {PublishYear}</p>
          <p>Page Count: {PageCount}</p>

          {/* //1. Pass the 4 authors in - DONE 2. Pass the 4 data points for each author -- DONE 3. Display the right author with the right data points depending on checked value
              //1.Title 2. Author 3. Page Count 4. Publish Date -- For all within each page
              //AFTERWARDS: Depending on the author display chosen page
               */}
        </div>
      </Link>
    </div>
  );
}

export default Book;
