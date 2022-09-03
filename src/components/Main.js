import React from "react";
import "./Main.css";
import categories from "./utils/Categories";
import Results from "./Results";

function Main({ checkedState, setCheckedState, author }) {
  const books = author?.docs;
  console.log(books);
  const handleChange = (event) => {
    console.log(event)
    setCheckedState({selectedOption: event});
  };

  console.log(checkedState);

  return (
    <div className="Main">
      <div className="MainBox">
        <div className="SortBar">
          <div className="SortBarBox">
            <p>SortBar component</p>
            <h3>Sort by:</h3>
            <form>
              {categories.map((item) => {
                console.log(categories.indexOf(item));
                return (
                  <li
                    key={item.name}
                    style={{ listStyleType: "none" }}
                  >
                    <div className="categories-list-item">
                      <div className="categories-box">
                        <input
                          type="radio"
                          id={`custom-checkbox-${categories.indexOf(item)}`}
                          name={item.name}
                          value={categories.indexOf(item)}
                          checked={checkedState.selectedOption === categories.indexOf(item)}
                          onChange={() =>
                            handleChange(categories.indexOf(item))
                          }
                        />
                        <label
                          htmlFor={`custom-checkbox-${categories.indexOf(
                            item
                          )}`}
                        >
                          {item.name}
                        </label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </form>
          </div>
        </div>
        {books && <Results checkedState={checkedState} books={books} />}
      </div>
    </div>
  );
}

//Pass checkox states back to Result page
export default Main;