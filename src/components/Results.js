import React from "react";
import "./Results.css";
import Book from "./Book.js";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Results({ checkedState, books }) {
  console.log(`These are checked: ${checkedState}`);
  return (
    <div className="Results">
      <div className="ResultsBox">
        <p>Results Component</p>

        {/* Sorting/Ranking happends here depending on the checked box 2. Only allow one checked box at a time*/}
        {/* Finish the 3 types of sorting and be done */}
        {books.map((item) => {
          if (books.indexOf(item) < 11 && checkedState === 0) {
            const sortedBooks = books.sort(function (a, b) {
              return a.first_publish_year - b.first_publish_year;
            });
            sortedBooks.map((item) => {
              return (
                <>
                  <p>Index is {books.indexOf(item) + 1}</p>

                  <Book
                    coverId={item.cover_i}
                    author={item.author_name}
                    title={item.title}
                    PublishYear={item.first_publish_year}
                    PageCount={item.number_of_pages_median}
                  />
                </>
              );
            });
          } else if (books.indexOf(item) < 11 && checkedState === 1) {
            const sortedBooks = books.sort(function (a, b) {
              return a.first_publish_year - b.first_publish_year;
            });
            sortedBooks.map((item) => {
              return (
                <>
                  <p>Index is {books.indexOf(item) + 1}</p>
                  <Book
                    author={item.author_name}
                    title={item.title}
                    PublishYear={item.first_publish_year}
                    PageCount={item.number_of_pages_median}
                  />
                </>
              );
            });
          }
          //Default Sort alphabetically && if Alphabetical is checked
          else if (books.indexOf(item) < 11) {
            return (
              <>
                <p>Index is {books.indexOf(item) + 1}</p>
                <Book
                  author={item.author_name}
                  title={item.title}
                  PublishYear={item.first_publish_year}
                  PageCount={item.number_of_pages_median}
                />
              </>
            );
          }

          //    checkedState.map((item) => {
          //     if (item === true) {
          //         console.log(checkedState.indexOf(item))
          //         return <Book checked={checkedState.indexOf(item)} books={books}/>
          //         // Return the books matched to the Index

          //     }
        })}
      </div>
    </div>
  );
}

export default Results;
