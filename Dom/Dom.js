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

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// // h2.innerText =  "Welcome to js learning"
// h2.innerText = h2.innerText + "Welcome to js learning"


//creates 3 div with common class name - "box". access them & add some unique text to each of them.

// let divs = document.querySelectorAll(".box")
// let idx = 1;
// for (div of divs) {
//     div.innerText = `Hi i am new div text ${idx}`;
//     idx++;
// }


// // Attributes
// getAttributes (attr) //to get the attribute value

// setAttribute(attr, value) // to set attribute val th

// // style 
// Node.style


// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p")
// console.log(para.getAttribute("class")) // get attribute value

// let para = document.querySelector("p")
// console.log(para.setAttribute("class" ,"para")) // it is set new class name 

// we can change css using JS
// let div = document.querySelector("div")
// div.style.backgroundColor = "yellow";
// div.style.color = "red";
// div.style.borderColor = "#f98767";
// div.style.fontSize = "25px";
// div.style.margin = "auto";
// div.innerHTML = "hi JS"


// // Insert Elements // syntex => let el = document.createElement("div")
// Node.append(el) // add at the end of node (inside)
// Node.preappend(el) // add at the Start of node (inside)
// Node.before(el) // add before the node(outside)
// Node.after(el) // add After the node(outside)

// //Delete Element
// Node.remove() // remove the node

// let heading = document.createElement("h2");
// heading.innerHTML = "hi am new heading";

// let newBtn = document.createElement("button");
// newBtn.innerHTML = "Click me";
// console.log(newBtn);

// let div = document.querySelector("div")
// div.before(heading);
// div.after(newBtn);

// some questions

// create a new button elements. Give it a text "Click me", background color of red & text color of white. insert the button as the first elements inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerHTML = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
let body = document.querySelector("body")
body.prepend(newBtn);

//Create a <p> tag in html, give it a class & some styling. now create a new class in css and try to append this class to the <p> element. And overwrite new and solving this problem using classList.

let para = document.querySelector("p");
// para.setAttribute("class","para-new-class") // it is remove old class but we want to add new class without removing old class
para.classList.add("para-new-class")