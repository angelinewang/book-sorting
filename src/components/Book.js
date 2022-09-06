import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

function Book({ id, checked, author, title, PublishYear, PageCount, coverId }) {
  console.log(id, author, title, PublishYear, PageCount, coverId, checked);

  const [pageCount, setPageCount] = React.useState(PageCount);

  React.useEffect(() => {
    if (pageCount == undefined) {
      setPageCount("N/A");
    }
  }, [PageCount]);

  return (
    <div className="Book">
        key={id}
        // coverId={coverId}
        // author={author}
        // title={title}
        // PublishYear={PublishYear}
        // PageCount={PageCount}
        <div className="BookBox">
          <p>Author: {author}</p>
          <p>Title: {title}</p>
          <p>Publish Year: {PublishYear}</p>
          <p>Page Count: {PageCount}</p>
        </div>
    </div>
  );
}

export default Book;
