import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BookDetails from './components/BookDetails.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById("root"));


      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
          <Router>
              <Routes>
            <Route exact path='/' element={<App />} />
            <Route path=':id' element={<BookDetails/>} />
            {/* <Route path='*' element={<App/>}/> */}
            </Routes>
          </Router>
      );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
