import React from 'react'
import "../App.css";
import Main from "../components/Main";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

function Home({books}) {
    
  
    const [author, setAuthor] = useState([]);
  
    const [checkedState, setCheckedState] = useState({}
      );
        return (
          <div className="App">
            {books.length > 1 ? (
              <div className="AppBox">
                <Nav data={books} author={setAuthor} setCheckedState={setCheckedState}/>
                <Main author={author} checkedState={checkedState} setCheckedState={setCheckedState} />
              </div>
            ) : (
              <div>Loading... </div>
            )}
          </div>
        );
}

export default Home