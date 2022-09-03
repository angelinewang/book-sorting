import React from "react";
import "./Main.css";
import categories from "./utils/Categories";
import Results from "./Results";

function Main({ author }) {
  const books = author[0]?.docs;
  console.log(author);
  const [checkedState, setCheckedState] = React.useState(
    new Array(categories.length).fill(false)
  );

  console.log(checkedState);

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
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
                    key={categories.indexOf(item)}
                    style={{ listStyleType: "none" }}
                  >
                    <div className="categories-list-item">
                      <div className="categories-box">
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${categories.indexOf(item)}`}
                          name={item.name}
                          value={item.name}
                          checked={checkedState[categories.indexOf(item)]}
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
        <Results checkedState={checkedState} books={books}/>
    </div>
    </div>
  );
}

//Pass checkox states back to Result page
export default Main;
