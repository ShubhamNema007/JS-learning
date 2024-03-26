//Events//
// The change in the state of an object is knowm as events.
// Events are fired to notify code of " intersting changes" that may affect code executions.

// 1: Mouse events (click,double click etc)
// 2: Keyborad events (keypress , keyup ,keydown)
// 3: Form events (sumbit etc)
// 4: Print events & many more

let btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    console.log("btn was clicked");
    // let a = 25;
    let a = 2;
    let b = 2;

    console.log(a * b);
}

// Event Object
// It is a speical object that has details about the events.
// All Events handlers have access to the event Object's properties and methods.

// Node.events = (e) =>{
//      handles here.
// }

// e.target, e.type, e.clientX, e.clientY

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

//Event Listeners

// node.addEventListener(event ,callback)
// node.removeEventListener(event,callback)
// *note: the callback refernce should be same to remove

let btn3 = document.querySelector('#btn3')
btn3.addEventListener("click", () => {
    console.log("button3 was clicked")
});
btn3.addEventListener("click", () => {
    console.log("button 3 was clicked - handler1")
});
btn3.addEventListener("click", () => {
    console.log("button 3 was clicked - handler2")
});
const handler3 = () => {
    console.log("button 3 was clicked - handler3")
};
btn3.addEventListener("click", () => {
    console.log("button 3 was clicked - handler4")
});
btn3.removeEventListener("click", handler3);

//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modebtn = document.querySelector("#btnmode")
let body = document.querySelector("body")
let currMode = "light";

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark"
        // document.querySelector("body").style.backgroundColor = "black"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else {
        currMode ="light"
        // document.querySelector("body").style.backgroundColor = "white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode)
})