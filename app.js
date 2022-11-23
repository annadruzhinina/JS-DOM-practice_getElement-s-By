// ```jsx
// /*
//  * You Do: Work through the following prompts. Write your code below each
//  * comment.
//  */

// // ✏️ 1. Get the element with an ID of 'first'
//📌  First option
const firstID = document.getElementById("first");
console.log(firstID);
//📌  Second option
const firstIDCreate = document.createElement("h3");
firstIDCreate.setAttribute("id", "first");
console.log(firstIDCreate);

// //✏️ 2. Now delete that first element (in the html file), and re-run your code. What changed?
//I dont see  <p id="first">Delete this p</p> on web page

firstID.remove();
console.log(firstID);

// //✏️ 3. Get the elements with a class of 'second' with getElementsByClassName:
//Get arr of elements who has class='second'

const listElementsSecondClass = document.getElementsByClassName("second");
// Result in console HTMLCollection(2) [ul.second, p.second]
console.log(listElementsSecondClass);

//Delete ul.second from arr=[ul.second, p.second]
const secondClass_1 = document.getElementsByClassName("second")[0];
console.log(secondClass_1);

//Delete p.second from arr=[ul.second, p.second]
const secondClass_2 = document.getElementsByClassName("second")[1];
console.log(secondClass_2);

// //✏️ 4. Delete one of the elements with a class of 'second' and refresh the page.
// //Do you get a similar result?

listElementsSecondClass[0].remove();
// Result HTMLCollection [p.second]
console.log(listElementsSecondClass);

// //✏️ 5. Get the span element using getElementsByTagname:

const getSpanElement = document.getElementsByTagName("span");
//Result in console HTMLCollection [span]
console.log(getSpanElement);

// //✏️ 6. Add a span anywhere, and re-run the last piece of code. What's different?
//Added span into p tag
const addSpanElement = document.createElement("span");
const h3Element = document.getElementById("para");
h3Element.appendChild(addSpanElement);
//Result <p id="para">Some text here<span></span></p>
console.log(h3Element);
