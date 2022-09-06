import React from 'react'
import "../App.css";
import Main from "../components/Main";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

function Home() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      async function getData() {
        Promise.all([
          fetch("http://openlibrary.org/search.json?author=jrr+tolkien"),
          fetch("http://openlibrary.org/search.json?author=leo+tolstoy"),
          fetch("http://openlibrary.org/search.json?author=dan+brown"),
          fetch("http://openlibrary.org/search.json?author=jk+rowling"),
        ])
          .then((responses) =>
            Promise.all(responses.map((response) => response.json()))
          )
          .then((values) => setBooks(values));
      }
      getData();
    }, []);
  
    const [author, setAuthor] = useState([]);
  
    const [checkedState, setCheckedState] = useState({}
      );
        return (
          <div className="App">
            {books.length > 1 ? (
              <div className="AppBox">
                <Nav data={books} author={setAuthor} setCheckedState={setCheckedState}/>
                <Main author={author} checkedState={checkedState} setCheckedState={setCheckedState} />
              </div>
            ) : (
              <div>Loading... </div>
            )}
          </div>
        );
}

export default Home