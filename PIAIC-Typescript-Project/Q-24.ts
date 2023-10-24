const string1: string = "hello";
const string2: string = "HELLO";
const string3: string = "world";

console.log(`Test for string equality: ${string1 == string2}`); // False
console.log(`Test for string inequality: ${string1 != string3}`); // True

console.log(`Test using the toLowerCase function: ${string1.toLowerCase() == string2.toLowerCase()}`); // True

const num1: number = 5;
const num2: number = 10;

console.log(`Numerical test for equality: ${num1 == num2}`); // False
console.log(`Numerical test for inequality: ${num1 != num2}`); // True
console.log(`Numerical test for greater than: ${num1 > num2}`); // False
console.log(`Numerical test for less than: ${num1 < num2}`); // True
console.log(`Numerical test for greater than or equal to: ${num1 >= num2}`); // False
console.log(`Numerical test for less than or equal to: ${num1 <= num2}`); // True

const bool1: boolean = true;
const bool2: boolean = false;

console.log(`Test using the "and" operator: ${bool1 && bool2}`); // False
console.log(`Test using the "or" operator: ${bool1 || bool2}`); // True

const array: string[] = ["apple", "banana", "orange"];

console.log(`Test whether an item is in an array: ${array.includes("banana")}`); // True
console.log(`Test whether an item is not in an array: ${!array.includes("grape")}`); // True
