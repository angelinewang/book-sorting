import "./App.css";
import Home from "./components/Home";
import "./index.css";
import BookDetails from "./components/BookDetails.js";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
