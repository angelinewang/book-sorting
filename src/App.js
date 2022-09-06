import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Pagination from "./components/Pagination";
import Book from "./components/Book";
import { useState } from "react";
import { useEffect } from "react";

function App() {
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/details/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;