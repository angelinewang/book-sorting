import "./App.css";

import { useEffect, useState, React } from "react";

function App() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://openlibrary.org/search.json?author=tolkien"
      );
      const bookData = await response.json();
      setBooks(bookData);
    }
    getData();
  }, []);

  console.log(Books);

  return <div className="App"></div>;
}

export default App;
