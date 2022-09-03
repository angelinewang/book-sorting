import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Nav.css'

function BookDetails() {

  const [books, setBooks] = React.useState([]);
  
  React.useEffect(() => {
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

  let {params} = useParams()

  console.log(params)

  let foundBook = books.map((item) => {
    console.log(item)
    item.map((el) => { 
      console.log(el)
       if (el.key == params) {
return el
      }
    })
  })

  return (
    <>
        <div className='.navbar'>
            <Link path='/'><div>Back</div></Link> 
            
            <div>Title: {foundBook.title}</div>
            <div>Author: {foundBook.author_name}</div>
            <div>Page count: {foundBook.number_of_pages_median ? foundBook.number_of_pages_median : "N/A"}</div>
            <div>Publish Date: {foundBook.first_publish_year}</div>
        </div>
        <img src={`https://covers.openlibrary.org/b/id/${foundBook.cover_i}-L.jpg`} alt={foundBook.title} />
        </>
  )
}

export default BookDetails

//route needs to be created for 'back' link to work