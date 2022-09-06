import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

function Book({ id, checked, author, title, PublishYear, PageCount, coverId }) {
  const [pageCount, setPageCount] = React.useState(PageCount);

  React.useEffect(() => {
    if (pageCount == undefined) {
      setPageCount("N/A");
    }
  }, [PageCount]);

  return (
    <div className="Book">
      <Link
        key={id}
        to={"/details/" + id}
        // coverId={coverId}
        // author={author}
        // title={title}
        // PublishYear={PublishYear}
        // PageCount={PageCount}
      >
        <div className="BookBox">
          <p>Author: {author}</p>
          <p>Title: {title}</p>
          <p>Publish Year: {PublishYear}</p>
          <p>Page Count: {PageCount}</p>
        </div>
      </Link>
    </div>
  );
}

export default Book;
