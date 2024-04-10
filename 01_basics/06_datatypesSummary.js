/*
There are two types of datatypes based on how to store data in memory as well as how to access it from memory:
1> Primitive datatypes
2> Non Primitive datatypes

Primitive datatypes: Call by value(Get copy of value from memory, not memory reference)
---------------------------------
string, number, boolean, null, undefined, symbol, bigint
*/

/*JavaScript is dynamically typed languages because we never tell JavaScript that what type of value we are assigning to a variable.
*/


const score = 100 // number type value
const scoreValue = 100.3 // number type value
const isLoggedIn = false // boolean type value

const outsideTemp = null // object type empty value or standalone value

let userEmail; // undefined value of type undefined
let userSecEmail = undefined; // undefined value of type undefined

const id = Symbol('123')
const anotherID = Symbol('123')
console.table([id, anotherID]);
console.log(id === anotherID); // false

const bigNumber = 67236457345659n // bigint representation(n after big number)
console.log(bigNumber); // 67236457345659n
console.log(typeof bigNumber); // bigint


/*
Non Primitive datatypes: memory Reference(Get memory reference)
-------------------------------------
Array, Objects, Functions
*/

const heros = ["Shaktiman", "Naagraj", "Doga"] // Array representation

// Object representation
let myObj = {
    name: "Aakash",
    age: 25
}

// Function representation
const myFunction = function(){
    console.log("Hello, Aakash!");
}

console.log(typeof bigNumber); // bigint if bigNumber is declare as well as assigned otherwise undefined as value we get.

console.log(typeof outsideTemp); // object

console.log(typeof scoreValue); // number

console.log(typeof myFunction); // function object

console.log(typeof heros); // object

console.log(typeof myObj); // object

console.log(typeof id); // symbol


/* ****************Stack and Heap memory*********************
Stack memory is used for all primitive datatypes

*/

let myYoutubeName = "aakashshukladotcom"
let anotherName = myYoutubeName // Get copy of "aakashshukladotcom" value  from myYouttubeName memory location and store in memory location of anotherName.
console.log(myYoutubeName);
console.log(anotherName);
anotherName = "pranjulshukladotcom"
console.log(myYoutubeName);
console.log(anotherName);

/*

Heap memory is used for all non primitive datatypes

*/

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // memory reference of UserOne object will stored in UserTwo memory
console.log(userOne);
console.log(userTwo);

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);

// Look at Stack & Heap memory diagram
