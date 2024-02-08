// function definations

// function functionName {
//     do some work
// }

// function functionName (param1 , param2){
//     do some work here
// }
// how to call function or function invoke: functionname();
// --------------------------------------------------------------------
// example 1:
function myfunction(){
    console.log("this is first function")
    console.log("this is second function")
}

function myfunction(msg){ //(msg)=> parameters
    console.log(msg)
}
myfunction("this is first function")
// --------------------------------------------------------------------

// Make a sum program using function...
function sum(x, y){
    console.log(x + y)
}
// sum (8, 9) --for print sum

// using return method
function sum(x, y){
    sum = x + y;
    return sum;
}
let val = sum(8, 9);
console.log(val);

// --------------------------------------------------------------------

// Arrow Function =>
// general Syntax

// const functionName = (param1, param2)=>{
//     do some work here
// }

// arrow function example:
const arrowSum = (x,y)=>{
    console.log(x + y)
} 
const arrowmul = (a,b) => {
    return(a * b)
}
// --------------------------------------------------------------------

// create a function using the "function" keyword that takes a string as an arguments & returns the number of vowel in the string.

function functionvow(str){
    let count = 0;
    for (const char of str)
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
    console.log(count)
} 

// forEach loops in Array
// arr.forEach(callBackFunction)
//callback functions : Here it is function excute for each element in the arrays.
// A callback is a function passed as an arguments to another functions
// arr.forEach((val) =>{
//     console.log(val);
// })

// For a given arrays of number, Print the squre of each values using forEach loops.

let nums = [2, 4, 6, 8, 12];
nums.forEach((num) => {
    console.log(num * num);
});

// We are given arrays of marks of Students. Filter out of the marks of students that scored of 90+.

let marks = [88, 92, 92, 90, 91, 82]
let newMarks = marks.filter((student) => {
    return student > 90
})
console.log(newMarks,marks)


function clickme() {
  document.getElementById("click-red").style.backgroundColor = "red"
}
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
} 