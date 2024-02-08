// Window object
// The window objets represents an open window in a browser. It is browser's Object (not javascript's) & is automatically created by browser it is global object with lots of property and method.

// console.log(window)
// window.console.log("hello JS")

// What is DOM => Document object model
// When a web page is loaded, the browser cretes a Document Object model.

// console,log => it is print values on console.
// console.dir(window.document) // it is use for print object.

document.body.style.backgroundColor = "skyblue"; // it is change the body color


//Dom Manipulation :-
// Selecting with id
//  document.getElementById("myId")

// Selecting with Class
//  document.getElementsByClassName(".myClass")

// Selecting with tag
//  document.getElementsByTagName("p")

//  Query Selector 
// document.querySelector("myId / myClass / tag")
// it is return First Elments

// document.querySelectorAll("myId / myClass / tag")
//returns a nodeList

// let elements = document.querySelector("p");
// console.dir(elements);

// let allElements = document.querySelectorAll("p");
// console.dir(allElements);


// Dom Properties
// tagName : return tag for element notes
// innerText : Return the text content of the elements and all its children
// innerHTML : Return the plain text of HTML Contents in the elements.
// textContent : Return textual content even for hidden elements. 

// div.innerText = "<div> Hello</div>"
// div.innerHTML = "<div> Hello new div </div>"


// Some basic Questions

// creates a H2 heading elements with text = "Hello JS Students"/ append form "Welcome to js learning" to this text using js.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
// h2.innerText =  "Welcome to js learning"
h2.innerText = h2.innerText + "Welcome to js learning"


//creates 3 div with common class name - "box". access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box")
let idx = 1;
for (div of divs) {
    div.innerText = `Hi i am new div text ${idx}`;
    idx++;
}