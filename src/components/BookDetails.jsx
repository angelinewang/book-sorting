import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './BookDetails.css';


function BookDetails({books}) {
  let params = useParams();
  let [extras, setExtras] = useState([])
  useEffect(() => {
    async function getExtras() {
      const res = await fetch(`https://openlibrary.org/works/${params.id}.json`)
      const extrasData = await res.json();
      setExtras(extrasData)
    }
    getExtras()
  }, [params.id])
  console.log(extras)

 


  const booksAll = books
    ? [...books[0].docs, ...books[1].docs, ...books[2].docs, ...books[3].docs]
    : null;

let specificBook = booksAll.find((item) => {
  return item.key.substring(7, item.key.length) === params.id
})

if (specificBook) {
  return (
  <>
    <div className="heading">
          <Link to="/">
            <button>Back</button>
          </Link>
          <div>Title: {specificBook.title}</div>
          <div>Author: {specificBook.author_name}</div>
          <div>Page count: {specificBook.number_of_pages_median ? specificBook.number_of_pages_median : "N/A"}</div>
          <div>Publish Date: {specificBook.first_publish_year}</div>
    </div>
    {specificBook.cover_i ?  (
       <img
       src={`https://covers.openlibrary.org/b/id/${specificBook.cover_i}-L.jpg`}
       alt={specificBook.title}
       /> 
    ) : <h1>No image available</h1>}
   
    <div>
      <p className="description">
        { 
        typeof extras.description === 'string' ? extras.description : (typeof extras.description === 'object'? extras.description.value : (<h1>No description available</h1>))
      }
      </p>
    </div>
  </>
  )
}
}

export default BookDetails;