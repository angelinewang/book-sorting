import React from 'react'
import "./Home.css";
import Main from "../components/Main";
import Nav from "../components/Nav";
import { useState } from "react";

function Home({books}) {
    
  
    const [author, setAuthor] = useState("none");
  
    const [checkedState, setCheckedState] = useState({}
      );
        return (
          <div className="App">
                  <div className="AppBox">
            {books.length > 1 ? (
              <>
        
                <Nav data={books} author={setAuthor} setCheckedState={setCheckedState}/>

                
              {
                author !== "none" ? (
                <Main author={author} checkedState={checkedState} setCheckedState={setCheckedState} />
                ) : (<div className="empty"><div className="emptyBox">Choose an author to begin!</div></div>)
              
              }
                
                
                </>
            ) : (
              <div className="empty">
              <div className="emptyBox">Loading... </div>
              </div>
            )
}

      </div>
      </div>
        );
}

export default Home