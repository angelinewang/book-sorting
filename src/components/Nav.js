import React from "react";
import "./Nav.css";

function Nav({ data, author }) {
  function handleClick(id) {
    author(data[id]);
  }

  return (
    <div className="navbar">
      {data.map((author, index) => (
        <button
          onClick={() => {
            handleClick(index);
          }}
          key={author.docs.key}
        >
          {author.docs[0].author_name[0]}
        </button>
      ))}
    </div>
  );
}

export default Nav;
