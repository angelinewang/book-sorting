import React from "react";
import "./Nav.css";

function Nav({ data }) {
  return (
    <div className="navbar">
      {data.map((author) => (
        <button key={author.docs.key}>{author.docs[0].author_name[0]}</button>
      ))}
    </div>
  );
}

export default Nav;
