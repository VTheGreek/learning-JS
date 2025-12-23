// ASK THE USER A NUMBER WITH PROMPT AND MAKE IT APPEAR WITH ALERT

// const num = prompt("Choose any number: ");
// alert(num);

// ASK USER FOR THEIR NAME AND MAKE IT APPEAR WITH ALERT
// let name = prompt("What's your name?");
// alert(`Hello ${name}`);

// ASK USER FOR THEIR AGE AND CONSOLE.LOG IT
// let age = prompt("How old are you?");
// console.log(age);

// CHECK IF A NUMBER IS POSITIVE
// let num = Number(prompt("Give me any positive number you want: "));
// 
// if (num > 0) {
//     alert(`${num} is a positive number`);
// } else {
//     alert(`${num} is not positive number.`);
// }

// CHECK IF A NUMBER IS NEGATIVE
// let num = Number(prompt("Give me any negative number you want: "));
// 
// if (num < 0) {
//     alert(`${num} is a negative number.`)
// } else {
//     alert(`${num} is not a negative number.`)
// }

// ASK A NUMBER FROM THE USER AND CHECK IF IT'S ZERO
// let num = Number(prompt("Give me any number: "));
// 
// if (num === 0) {
//     alert(`${num} is equal to 0`)
// } else {
//     alert(`${num} is not 0`)
// }

// CHECK IF A NUMBER IS EVEN

// let num = Number(prompt("Give me an even number: "));
// 
// if (num % 2 === 0) {
//     alert(`${num} is even number`);
// } else {
//     alert(`${num} is not even number`);
// }

// CHECK IF A NUMBER IS ODD

// let num = Number(prompt("Give me an odd number: "))

// if (num % 2 === 1) {
//     alert(`${num} is an odd number`)
// } else {
//     alert(`${num} is not an odd number`)
// }

// ASK THE USER FOR 2 NUMBERS AND SHOW THE LARGER ONE

// let num1 = Number(prompt("Give me your first number: "));
// let num2 = Number(prompt("Give me your second number: "));

// if (num1 > num2) {
//     alert(num1);
// } else if (num1 < num2) {
//     alert(num2);
// } else {
//     alert(`${num1} and ${num2} are equal.`)
// }
// CHECK THE AGE OF THE USER. IF THE USER IS OVER 18. USER IS ADULT

// let age = Number(prompt("How old are you?"));

// if (age >= 18) {
//     alert("You are an adult");
// } else {
//     alert("You are a minor");
// }

// ASK FOR A NUMBER AND CHECK IF IT'S LARGER THAN 100

// let num = Number(prompt("Give me a larger number than 100"));

// if (num > 100) {
//     alert(`${num} is larger than 100`)
// } else {
//     alert(`${num} is smaller than 100`)
// }

// ASK USER FOR THEIR SCORE AND IF IT'S >= 50 THE USER PASSED

// let score = Number(prompt("Write your score"));

// if (score >= 50) {
//     alert("You passed the exams.")
// } else {
//     alert("You have to take the exams again.")
// }

// ASK THE USER FOR THE TEMPERATURE AND ALERT IF IT'S COLD (TEMPRATURE < 10)

// let degrees = Number(prompt("What is the temperature today?"));

// if (degrees < 10) {
//     alert("It's cold wear a jacket")
// } else {
//     alert("it's warm")
// }

// Ask the user for a number and display whether it is a multiple of 5.

// let num = Number(prompt("Give me any number"))

// if (num % 5 === 0) {
//     alert(`${num} is multiple of 5.`)
// } else {
//     alert(`${num} is not multiple of 5.`)
// }

// Ask the user for a number and display whether it is less than 0.

// let num = Number(prompt("Give me a number: "));

// if (num < 0) {
//     alert(`${num} is smaller than 0`)
// } else {
//     alert(`${num} is larger than 0`)
// }

// Ask the user for a name and display an error message if it is empty.

// let name = prompt("What's your name?")

// if (name === "") {
//     alert("Error")
// } else {
//     alert(`Hello ${name}`);
// }

// Ask the user for a number and display its square.

// let num = Number(prompt("Give me a number and find out the square of it."))
// alert(num ** 2)

// Ask the user for two numbers and display their sum.

// let num1 = Number(prompt("Give me your first number"))
// let num2 = Number(prompt("Give me your second number"))
// alert(num1 + num2)

// Ask the user for a number and display whether it is equal to 10.

// let num = Number(prompt("Give me a number: "))
// if (num === 10) {
//     alert(`${num} is equal to 10.`)
// } else {
//     alert(`${num} is not equal to 10.`)
// }

// let gender = prompt("What is your gender Male(m) or Female(f)");

// if (gender === "m" || gender === "male" || gender === "Male") {
//     alert("Hello sir")
// } else if (gender === "f" || gender === "female" || gender === "Female") {
//     alert("Hello miss")
// }

// Display numbers from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// } 

// Display numbers from 10 down to 1.

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }

// Display all even numbers from 1 to 20.

// for (let i = 2; i <= 20; i = i + 2) {
//     console.log(i)
// }

// Calculate the sum of numbers from 1 to 10.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i
// }
// console.log(sum)

// Ask the user for a number N and display numbers from 1 to N.

// let N = Number(prompt("Choose any number"))
// for (let i = 1; i <= N; i++) {
//     console.log(i)
// }

// Ask the user for a number and display the sum from 1 to that number.

// let num = Number(prompt("Choose any number"))
// let sum = 0
// for (let i = 1; i <= num; i++) {
//     sum = sum + i;
// }
// console.log(sum)

// Display all odd numbers from 1 to 50.

// for (let i = 1; i <= 50; i = i + 2) {
//     console.log(i)
// }

// Ask the user for a number and display its reciprocal (1/number).

// let num = Number(prompt("Give me a number"))
// let rec = 1 / num;
// console.log(rec);

// Ask the user for a number and display its absolute value.

// const num = Number(prompt("Give me a number"));
// if (num < 0) {
//     console.log(Math.abs(num));
// } else {
//     console.log(num);
// }

// Ask the user for two numbers and display which one is greater or if they are equal.

// const num = Number(prompt("Give me a number"));
// const num2 = Number(prompt("Give me another one"));

// if (num > num2) {
//     console.log(num)
// } else if (num < num2) {
//     console.log(num2)
// } else {
//     console.log(`${num} and ${num2} are equal.`)
// }

// Ask the user for a number and display whether it is positive, negative, or zero.

// let num = Number(prompt("Give me any number"))
// if (num > 0) {
//     console.log(`${num} is positive number.`)
// } else if (num < 0){
//     console.log(`${num} is negative number.`)
// } else {
//     console.log(`${num} is equal to 0.`)
// }

// Ask the user for three numbers and display the greatest one.

// let num = Number(prompt("Give a number."))
// let num2 = Number(prompt("Give me another one."))
// let num3 = Number(prompt("And another one"))
// if (num > num2 &&  num > num3) {
//     console.log(num)
// } else if (num2 > num && num2 > num3) {
//     console.log(num2)
// } else {
//     console.log(num3)
// }

// Ask the user for a number and check whether it is two-digit.

// const num = Number(prompt("Give me a number"));
// if (num >= 10 && num <= 99 || num <= -10 && num >= -99) {
//     console.log(`${num} has 2 digits`)
// } else {
//     console.log(`${num} has 1 digit`)
// }

// Ask the user for a number and display whether it is a multiple of 3.

// const num = Number(prompt("Give me a number."));
// if (num % 3 === 0) {
//     alert(`${num} is multiple of 3!`)
// } else {
//     alert(`${num} is not a multiple of 3.`)
// }

// Ask the user for a number and display whether it is a multiple of both 3 and 5.

// const num = Number(prompt("Give me a number."))
// if (num % 5 === 0 && num % 3 === 0) {
//     alert(`${num} is multiple with 5 and 3`)
// } else if (num % 5 === 0 && num % 3 != 0) {
//     alert(`${num} is multiple of 5 but not 3.`)
// } else if (num % 3 === 0 && num % 5 != 0) {
//     alert(`${num} is multiple of 3 but not 5.`)
// } else {
//     alert(`${num} is neither equal to 3 or 5`)
// }

// Ask the user for a number and display whether it is between 1 and 100.

// const num = Number(prompt("Give me a number"))
// if (num >= 1 && num <= 100) {
//     alert(`${num} is between 1 and 100`)
// } else {
//     alert(`${num} is not between 1 and 100`)
// }


// Ask the user for a number and display whether it is between 1–100 or 200–300.

// const num = Number(prompt("Give me a number"))
// if (num >= 1 && num <= 100) {
//     alert(`${num} is between 1 and 100`)
// } else if (num >= 200 && num <= 300) {
//     alert(`${num} is between 200 and 300`)
// } else {
//     alert(`${num} is neither between 1 and 100 or 200 and 300`)
// }

// Ask the user for a number and display whether it is greater than 0 AND less than 50.

// const num = Number(prompt("Give me a number."));
// if(num > 0 && num < 50) {
//     alert(`${num} is greater than 0 and less than 50`)
// }  else {
//     alert(`${num} is great or less than 0 or 50`)
// }

// Ask the user for a number and display whether it is even AND greater than 10.

// const num = Number(prompt("Give me a number")) 
// if (num % 2 === 0 && num > 10) {
//     alert(`${num} is even number and greater than 10`)
// } else {
//     alert(`${num} is not even number or greater than 10`)
// }

// Ask the user for a number and display whether it is even OR greater than 10.

// const num = Number(prompt("Give me a number")) 
// if (num % 2 === 0 || num > 10) {
//     alert(`${num} is even number or greater than 10`)
// } else {
//     alert(`${num} is not even number or greater than 10`)
// }

// Ask the user for a number and display the square of the number.

// const num = Number(prompt("Give me a number"));
// const num2 = num ** 2;
// alert(num2);

// Ask the user for a number and display whether it is even or odd.

// const num = Number(prompt("Give me a number.")) 
// if (num % 2 === 0) {
//     alert(`${num} is even`)
// } else {
//     alert(`${num} is odd`)
// }

// Display all numbers from 1 to 20.

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }