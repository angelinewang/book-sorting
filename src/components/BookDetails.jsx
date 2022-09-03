import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function BookDetails({ author, title, PublishYear, PageCount, coverId }) {

    
  return (
    <>
        <div className='.navbar'>
            <Link><div>Back</div></Link> 
            
            <div>Title: {title}</div>
            <div>Author: {author}</div>
            <div>Page count: {PageCount}</div>
            <div>Publish Date: {PublishYear}</div>
        </div>
        <img src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} alt={title} />
        </>
  )
}

export default BookDetails

//route needs to be created for 'back' link to work