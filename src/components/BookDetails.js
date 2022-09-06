import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Nav.css";

function BookDetails(props) {
  let params = useParams();
  const [book, setBook] = React.useState([]);

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

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://openlibrary.org" + params.id + ".json"
      );
      const bookData = await response.json();
      setBook(bookData);
      console.log(book);
    }
    getData();
  }, []);

  // let foundBook = books.map((item) => {
  //   console.log(item);
  //   item.map((el) => {
  //     console.log(el);
  //     if (el.key == params) {
  //       return el;
  //     }
  //   });
  // });

  return (
    <>
      <div className=".navbar">
        <Link path="/">
          <div>Back</div>
        </Link>

        <div>Title: {props.title}</div>
        <div>Author: {props.author}</div>
        <div>Page count: {props.PageCount ? props.PageCount : "N/A"}</div>
        <div>Publish Date: {props.PublishYear}</div>
      </div>
      <img
        src={`https://covers.openlibrary.org/b/id/${props.coverId}-L.jpg`}
        alt={props.title}
      />
    </>
  );
}

export default BookDetails;

//route needs to be created for 'back' link to work
