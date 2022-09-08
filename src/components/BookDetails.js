import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Nav.css";

function BookDetails({books}) {
  let params = useParams();
  // const [book, setBook] = React.useState([]);

  console.log('hello world', params.id)

  const booksAll = books
    ? [...books[0].docs, ...books[1].docs, ...books[2].docs, ...books[3].docs]
    : null;
  console.log(books[0].docs);
  console.log(booksAll);

  // React.useEffect(() => {
  //   async function getData() {
  //     Promise.all([
  //       fetch("http://openlibrary.org/search.json?author=jrr+tolkien"),
  //       fetch("http://openlibrary.org/search.json?author=leo+tolstoy"),
  //       fetch("http://openlibrary.org/search.json?author=dan+brown"),
  //       fetch("http://openlibrary.org/search.json?author=jk+rowling"),
  //     ])
  //       .then((responses) =>
  //         Promise.all(responses.map((response) => response.json()))
  //       )
  //       .then((values) => setBooks(values));
  //   }
  //   getData();
  // }, []);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       "https://openlibrary.org" + params.id + ".json"
  //     );
  //     const bookData = await response.json();
  //     book = setBook(bookData);
  //   }
  //   getData();
  //   console.log(params.id);
  // }, [book])

  // let foundBook = books.map((item) => {
  //   console.log(item);
  //   item.map((el) => {
  //     console.log(el);
  //     if (el.key == params) {
  //       return el;
  //     }
  //   });
  // });

// console.log(books[0].docs)

let found = booksAll.find((item) => {
  return item.key.substring(7, item.key.length) === params.id
})

if (found) {
  console.log(found.title)
  // coverId={item.cover_i}
  //               author={item.author_name}
  //               title={item.title}
  //               PublishYear={item.first_publish_year}
  //               PageCount={item.number_of_pages_median}
  return ( <>
  <div className=".navbar">
        <Link to="/">
          <div>Back</div>
        </Link>
        <div>Title: {found.title}</div>
        <div>Author: {found.author_name}</div>
        <div>Page count: {found.number_of_pages_median ? found.number_of_pages_median : "N/A"}</div>
        <div>Publish Date: {found.first_publish_year}</div>
      </div>
      <img
        src={`https://covers.openlibrary.org/b/id/${found.cover_i}-L.jpg`}
        alt={found.title}
      /> 
</>
  )
}
}

export default BookDetails;

//route needs to be created for 'back' link to work