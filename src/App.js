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
      const response2 = await fetch("http://openlibrary.org/search.json?author=leo+tolstoy");
      const bookData2 = await response2.json();
      const response3 = await fetch("http://openlibrary.org/search.json?author=dan+brown");
      const bookData3 = await response3.json();
      const response4 = await fetch("http://openlibrary.org/search.json?author=rowling");
      const bookData4 = await response4.json();
      setBooks([bookData, bookData2, bookData3, bookData4]);
    }
    getData();
  }, []);

  console.log(Books);

  return <div className="App"></div>;
}

export default App;
