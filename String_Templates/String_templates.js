let name = "Shubham"
// console.log(name.length)
console.log(name[0])
console.log(name[1])
let friend = 'Rahul'
console.log(friend)
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// -- Template literals use backtics instand of quotes to define a new strings.
// Template literals --- syntax using backtics`` symbol for using template literals 
let boy1 = "Shubham"
let boy2 = "Rahul"
// Rahul is a friend of Shubham
let sentence = `${boy2} is a friend of ${boy1}` // ${variable} is use for tamplate literals
console.log(sentence)


// If we want to try add new Character in string then we use to escape sequence character it allows to add symbol in strings
// Escape Sequence Characters -- \ this symbol is use for escape sequence characters 
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = "Bana\"na"
console.log(fruit)