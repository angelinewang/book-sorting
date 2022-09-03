import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { useEffect, useState, React } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState([]);

  // const author = //Add author chosen through Route clicked on in Header here
    useEffect(() => {
      async function getData() {
        const response = await fetch(
          "http://openlibrary.org/search.json?author=tolkien"
        );
        const bookData = await response.json();
        // setBooks([bookData]);
        const response2 = await fetch(
          "http://openlibrary.org/search.json?author=leo+tolstoy"
        );
        const bookData2 = await response2.json();
        const response3 = await fetch(
          "http://openlibrary.org/search.json?author=dan+brown"
        );
        const bookData3 = await response3.json();
        const response4 = await fetch(
          "http://openlibrary.org/search.json?author=rowling"
        );
        const bookData4 = await response4.json();
        setBooks([bookData, bookData2, bookData3, bookData4]);
      }
      getData();
    }, []);

    // const myTimeout = setTimeout(, 5000);

//1. Wait 2. Why did it work with Nav

    // function myStopFunction() {
    //   clearTimeout(myTimeout);
    // }

  // console.log(books[0].docs);

  return (
    <div className="App">
{ books.length > 1 ?
  <div className="AppBox">
        <Header />
        <Nav data={books} author={setAuthor}/>
        <Main author={author} />
      </div> : <div>Loading...</div>
      //Loading State
}
      

    </div>
  );
}

export default App;
