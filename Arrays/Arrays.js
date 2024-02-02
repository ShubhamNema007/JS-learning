// Collection of some items is called arrays

let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)


// For given a array with marks of student => [85,86,97,36,78,60] Find the average marks of the entire class.

// let marks = [85,86,97,36,78,60]
// let sum = 0;
// for (let val of marks){
//    sum+= val;
// }
// // output =  442

// let avg = sum / marks.length
// console.log(`avg marks of the class = ${avg}`);


// For a given array with prices of 5 items => [250,645,300,900,50] all items have an offer of 10% off of them. change the array to store final price after applying offer.

let items = [250,645,300,900,50];
let i = 0;
for(let val of items) {
 let offer = val / 10;
 items[i] = items[i] - offer;
 console.log(`value after offer = ${items[i]}`);
 i++;
}

// Create an Array to store companies => "Microsoft,google,Uber,IBM,Amazon,Netflix"
// a =  Remove the first company form the Array
// b = Remove Uber & Add ola in its place.
// c = Add TCS at the end.Add

let companies = ["Microsoft","google","Uber","IBM","Amazon","Netflix"]
// companies.shift()
// companies.splice(2, 1, "ola")
companies.push("TCS")