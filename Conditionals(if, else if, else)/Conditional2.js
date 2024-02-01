// Write a code to identify even and odd digit
// let num = 2;
// if (num % 2 === 0){
//     console.log(num, "is even")
// }
// else{
//     console.log(num, "is odd")
// }

// Write a code which can give grades to student according to their score
// 90 to 100 => A
// 89 to 70 => B
// 69 to 60 => c
// 59 to 50 => D
// 0 to 49 => f

/////////////////////// method 1 ////////////////////////
// let score = 88;
// if (score >= 90 && score <= 100){
//     console.log("your score is", score, "and your grade is A")
// }
// else if(score >= 70 && score <= 89){
//     console.log("your score is", score, "and your grade is B")
// }
// else if(score >= 60 && score <= 69){
//     console.log("your score is", score, "and your grade is C")
// }
// else if(score >= 50 && score <= 59){
//     console.log("your score is", score, "and your grade is D")
// }
// else if(score <= 49){
//     console.log("your scror is", score, "and your grade is F")
// }


// check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log("You entered a positive number");
//     }
// } else {
//     console.log("You entered a negative number");
// }

// Ternary operator with parentheses
// let age = 17

// let lifeStage = (age >= 18) ? 'You are an adult.' : 'You are not an adult.'


/////////////////////// method 2 ////////////////////////
let score = prompt("please enter digit in between 1-100");
let grade;
if (score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 70 && score <= 89){
    grade = "B";
}
else if(score >= 60 && score <= 69){
    grade = "C";
}
else if(score >= 50 && score <= 59){
    grade = "D";
}
else if(score <= 49){
    grade = "F";
}
console.log("your grade is :" ,grade)