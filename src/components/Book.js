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
        to={"/details/" + id} style={{textDecoration: "none", color:"white"}}
      >
        <div className="BookBox">
          <p ><span>Author</span><br></br><br></br>{author}</p>
          <p><span>Title</span><br></br><br></br>{title}</p>
          <p><span>Publish<br></br>Year</span><br></br><br></br>{PublishYear}</p>
          <p><span>Page<br></br>Count</span><br></br><br></br>{PageCount ? PageCount : "N/A"}</p>
        </div>
        </Link>
    </div>

  );
}

export default Book;