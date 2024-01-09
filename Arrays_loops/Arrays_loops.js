let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// for...of --this method is used for print arrays items without using loop
for (let i of num) {
    console.log(i)
}

// for...in -- it will return arrays keys
for (let i in num) {
    console.log(num[i])
}

// ForEach Loop
num.forEach((element) => {
    console.log(element * element)
})

// Array.from -- this method is used for convert string to arrays
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

