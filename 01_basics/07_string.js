// String can be enclosed within single quotes or double quotes.

console.log("Hello" + ' World!');

const name = "Aakash"
const repoCount = 50
console.log(name + repoCount + " Value"); // It is not a prefered way of concatenate like this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is prefered & best way, known as string interpolation.

const gameName = new String("Mario-hc")
console.log(gameName); // Browser console -> String {'Mario'}, nodejs -> [String: 'Mario-hc'] => This is a string object with key:value pairs knows as properties. We can check these key:value pairs with the help of browser console.
/*
0: "M"
1: "a"
2: "r"
3: "i"
4: "o"
length: 5
[[Prototype]]: String -> This is String.prototype object contains additional properties and methods that string object can inherit automatically.
*/

console.log(gameName[0]); // This is the way to access the property of an object using bracket notation.


console.log(gameName.__proto__); // Returns String.prototype object using Dot notation


console.log(gameName.length); // Accessing property length value using Dot notation i.e. 5

console.log(gameName['length']); // Accessing property length value using Bracket notation i.e. 5

console.log(gameName.toUpperCase()); // Accessing method toUpperCase of String.prototype object using Dot notation.


console.log(gameName.charAt(2)); // Which character is present at index position 2 i.e. R


console.log(gameName.indexOf('i')); // What is the index of the provided character? If character is present, we get the index otherwise get the -1.


// const newString = gameName.substring(0, 4)
// const newString = gameName.substring(-8, 4) // substring method ignores the negative index and index becomes zero
// const newString = gameName.substring(-7, 4) // substring method ignores the negative index and index becomes zero
// const newString = gameName.substring(-6, 4) // substring method ignores the negative index and index becomes zero
const newString = gameName.substring(0, -4)  // substring method ignores the negative index and index becomes zero. NOTHING IS PRINTED
console.log(newString);

// slice
// const anotherString = gameName.slice(0, 4)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// trim
const newStringOne = "    Aakash     "
console.log(newStringOne)
console.log(newStringOne.trim());

// replace & includes
const url = "https://aakash.com/aakash%20shukla"
console.log(url);
console.log(url.replace('%20',' '));
console.log(url.includes('%20')); // true

// Split
console.log(gameName.split('-')); // Split method make an array from a string based on a saparator
console.log(gameName.split('')); // Split method make an array from a string based on a saparator
