# book-sorting
SEI Project 2 React

## Part 1 Description 
This project is a React front-end application that uses an Open Library API and creates lists of books based on author selection and sorting criteria. It was completed from Tuesday the 30th of August to Thursday the 8th of September 2022.

## Part 2 Deployment Link 
This app has been deployed through Netlify, and is accessible through this link:
https://singular-salamander-b02948.netlify.app/

## Part 3 Getting Started/Code Installation 
The code from this project can be accessed by forking this repository into your Github, and then cloning it, in order to open the code up on your local machine.

## Part 4 Timeframe & Working Team (Solo/Pair/Group)
This project was completed within the span of two and a half weeks with a partner (Mohamed Sheik). His deployed project is accessible through this link: https://deft-tulumba-c73cf2.netlify.app/

## Part 5 Technologies Used
Technologies used include: React framework, JavaScript, HTML, and CSS.

## Part 6 Brief 
Start of Brief given by [General Assembly](https://generalassemb.ly/)
______

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Reacathon

## Overview

The second project is to **build a React application** that consumes a **public API**.

### Technical Requirements

Your app must:

* **Consume a public API** – this could be anything but it must make sense for your project.
* **The app should include a router** - with several "pages".
* **Include wireframes** - that you designed before building the app.
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.

---

## Necessary Deliverables

* A **working application**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
* **A `readme.md` file** with:
  * Explanations of the **technologies** used
    * A couple of paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
    * Link to your **wireframes** – sketches of major views / interfaces in your application
   * Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome

---

## Suggested Ways to Get Started

* **Don’t hesitate to write throwaway code** to solve short term problems.
* **Read the docs for whatever technologies / frameworks / APIs you use**.
* **Write DRY code**.
* **Be consistent with your code style.**
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Keep user stories small and well-defined**, and remember – user stories focus on what a user needs, not what development tasks need accomplishing.
* **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
* **Make it all well-formatted.** Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
* **Comment your code.** Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.

---

## Useful Resources

* **[React](https://reactjs.org/)**

______
End of Brief


## Part 7 Planning 
At first, we wireframed the application through Excalidraw:
![image](./project-2-excalidraw)
--> Change this into an image of the wireframe DONE
--> Add this image to the directory

Then, we used Trello to organise initial tasks, including the setup of different components and how those components' work was split between us. 

I was tasked with the sorting bar, the main component, pagination, and the preview results pages. My partner completed the navigation bar, API fetching, and the detailed book page. We both worked on the react router, and getting the links up and running.

## Part 8 Build/Code Process
Here are 3 code snippets I'm particularly proud of:

```
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return sortedBooks.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor(((currentPage - 1) / pageLimit) * pageLimit);
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
```
What did I do?
As a part of the pagination process, this piece of code takes in the number of items each page is meant to display, and splits up the data fetched, in order to limit the number of books rendered. It also uses the limit I set on the number of pages that should exist in total, and ensures that only that number is displayed.

How did I do it?
By creating a new function, I was able to identify the starting index of the first item displayed on the page by multiplying the current page with the data limit, and then subtracting the data limit. I was also able to determine the index of the final item displayed on the page by adding the index of the first book to the data limit (limit to number of books on each page).

Why did I do it?
I did this in order to ensure that only the necessary number of items are rendered on the screen for the user to see. 

```
categories.map((item) => {
                      console.log(categories.indexOf(item));
                      return (
                        <li
                          key={item.name}
                          style={{ listStyleType: "none" }}>
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
                    })
```
What did I do?
In this piece of code, I created a list of options for sorting, which allows the user to sort by one criteria at a time: either page count, publish year, alphabetically by the title of the book.

How did I do it?
I added these sorting options by mapping over the sorting options available, and creating an input field for each. These inputs are all radio buttons, in order to ensure that only one choice is selected at a time. The app is notified of the user's change in sorting desire through the onChange attibute set on each of the input elements. This attribute triggers the handleChange function, which takes in the index of the sorting category indicated, and ensures that the data is rerendered to reflect the chosen sorting category.  

Why did I do it?
I mapped through a list of sorting categories so that the categories listed remain dynamic on addition or removal of categories. Furthermore, the radio buttons ensured that only one sorting option could be selected at a time. 

```
 React.useEffect(() => {
        if(checkedState.selectedOption === 0) {
            const updatedBooks = [...sortedBooks].sort((a,b) => a.first_publish_year - b.first_publish_year)
            setSortedBooks(updatedBooks)
        }
        else if(checkedState.selectedOption === 1) {
            setSortedBooks([...sortedBooks].sort((a,b) => a.number_of_pages_median - b.number_of_pages_median));
        }
    
        else if(checkedState.selectedOption === 2) {
            setSortedBooks([...sortedBooks].sort(function(a, b) {
                let textA = a.title.toUpperCase().trim().replace('"', "");
                let textB = b.title.toUpperCase().trim().replace('"', "");
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            }));
        }

        else {
            setSortedBooks(books)
        }
    
    }, [books, checkedState, sortedBooks]);
```
What did I do?
This block of code runs through conditional statements to determine how to sort the books. Depending on the index number of the sorting option selected, React will sort and rerender the items in the relevant manner.

How did I do it?
I used the useEffect hook in order to ensure that the data is rerendered on change of the sorting selection. Furthermore, I used state in order to create an array of books that could be re-arranged. 

Why did I do it?
I chose to use a useEffect hook because this allows the data to rerender at the appropriate time, and I used conditionals in order to ensure that the user's choice is re-evaluated and the rendered data is appropriate.

## Part 9 Challenges
Here are 2 technical challenges we came across:

Firstly, we faced a challenge while connecting the link of each book preview displayed to their relevant book details page.

This was a challenge because we kept receiving the error that the pathname could not be found, and that the route was non-existent, even though the params were attached appropriately and the link was given the expected path. 

We realised that the issue was that we had not passed the necessary props down through the route definition. 
In order to resolve this, we needed to fetch the data in the app component, and pass the book data down to the book details page through the route created for it on the app component. This meant that we also needed to sort through the books array and identify the one that was relevant for the link clicked, and then extract the appropriate properties from the book. This meant that we needed to use a find array method and create concatenate all the books into one large array, rather than separating them by author.

In order to work through this problem together, we both Googled, and looked through Stack overflow, Freecodecamp, among other resources. We realised that we had attached all the route requirements correctly, so there was only one reason left.

Here is a code block from this challenge:
```
 useEffect(() => {
    async function getData() {
      Promise.all([
        fetch("https://openlibrary.org/search.json?author=jrr+tolkien"),
        fetch("https://openlibrary.org/search.json?author=leo+tolstoy"),
        fetch("https://openlibrary.org/search.json?author=dan+brown"),
        fetch("https://openlibrary.org/search.json?author=jk+rowling"),
      ])
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((values) => setBooks(values));
    }
    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/details/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
```

Another challenge we faced was ensuring that the sorted data was re-rendered on click of a new sorting option. 

This was a challenge because the list of books was only re-rendered when a radio button was released, rather than when it was pressed. This meant that the books were not sorting at the appropriate time. Furthermore, the books listed were sorting, but not rendering in the correct order. There were many odd errors occurring.

We decided to console log the indices of the items being rendered, and realised that the items were in the correct order when being console logged, but were not being rendered onto the screen in the correct order. Furthermore, we tested different authors to see if there was any difference between the book lists being rendered. We got an error where the books would re-render, but would add an additional list of books ontop of the existing list.

We realised that the issue was that we had not added key attributes to the rendered elements appropriately.


Here is a code block from this challenge: 
```
categories.map((item) => {
                      console.log(categories.indexOf(item));
                      return (
                        <li
                          key={item.name}
                          style={{ listStyleType: "none" }}>
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
                    })
```

## Part 10 Wins 
Here are 2 wins:

Firstly, I'm very proud of creating the empty states for loading and also for before the user has selected an author.

Here is a code block from this win:
```
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
```

Secondly, I'm very proud of creating buttons that displayed the current page the user is on, along with the options to continue onto the next page, or go back to the previous page.

Here is a code block from this win:
```
<div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </div>
```

## Part 11 Key Learnings/Takeaways 
I became more confident with using the React framework to build a complex application involving a multitude of components. I also became more comfortable with the processing of fetching data from a public API, identifying, and extracting the pieces of data from that API that are relevant to a project. I also became more confident using routes to create the look for different pages within my application. Finally, I am much more comfortable working with data and passing it throughout the tree of my application.

Some engineering processes I became more familiar with include liveshare and pair-coding, as I used this with my partner in order to work on one repository simultaeneously and avoid the chaos of merging code. I also learned to use branches more effectively by creating different branches for different features, and reviewing my partner's code before merging it into the main branch. Finally, I became more familiar with project management, as I needed to divide a large project into manageable chunks, and determine the dependencies between different parts of the app.

## Part 12 Bugs
There are no obvious bugs that we are aware of. However, the data still takes quite a while to load at first, and sometimes it gets stuck on the loading screen. Furthermore, the Open Library API was at times incomplete with the data it contained, so many books do not have corresponding publish dates and cover images.

## Part 13 Future Improvements 
Some possible future improvements include the addition of headshots for the authors selected, more well thought out UI, a search component to find any book details page based off it's title, and favourite feature in order to save any books desired into a list of personalised favourites.
