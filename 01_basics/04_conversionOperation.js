/*
// Conversion from different datatypes to number
// let score = 33 // number -> number, value: 33
// let score = "33" // string -> number, value: 33
// let score = "33abc" // string -> number, value: NaN
// let score = null // object -> number, value: 0
// let score = undefined // undefined -> number, value: NaN
// let score = true // boolean -> number, value: 1
// let score = false // boolean -> number, value: 0
// let score = "Aakash" // string -> number, value: NaN
// let score = {} // object -> number, value: NaN
let score = { 
    1: 'a'
} // object -> number, value: NaN
// let score = [] // object->number, value: 0
// let score = ['Aakash'] // object->number, value: NaN
let score = Symbol("key1") // TypeError: Cannot convert a Symbol to a number

console.log("Type before conversion->", typeof score);
let valueInNumber = Number(score)
console.log("Value after conversion->", valueInNumber);
console.log("Type after conversion->", typeof(valueInNumber));

// Both methods are correct to check type
console.log(typeof score);
console.log(typeof(score))
*/


/*
// Conversion from different datatypes to boolean
// let isLoggedIn = 1 // number -> boolean, value: true
// let isLoggedIn = -10 // number -> boolean, value: true
// let isLoggedIn = 0 // number -> boolean, value: false
// let isLoggedIn = "" // string -> boolean, value: false
// let isLoggedIn = "Aakash" // string -> boolean, value: true
// let isLoggedIn = [] // object -> boolean, value: true
// let isLoggedIn = {} // object -> boolean, value: true
// let isLoggedIn = Symbol() // symbol -> boolean, value: true
// let isLoggedIn = null // object -> boolean, value: false
// let isLoggedIn = undefined // undefined -> boolean, value: false

console.log("Type before conversion->", typeof isLoggedIn);
let valueInBoolean = Boolean(isLoggedIn)
console.log("Value after conversion->", valueInBoolean);
console.log("Type after conversion->", typeof(valueInBoolean));
*/


/*
Conversion from different datatypes to string
// let toStringValue = 33 // number -> string, value: "33"
// let toStringValue = [] // object -> string, value: NOTHING is printed
// let toStringValue = ["aakash", "shukla"] // // object -> string, value: aakash,shukla
let toStringValue = {} // object -> string, value: [object Object]. [object, object] is the string representation of a JavaScript object data type. // Read: https://www.freecodecamp.org/news/object-object-in-javascript-meaning-in-js/
// let toStringValue = null // object -> string, value: null
// let toStringValue = undefined // undefined -> string, value: undefined
// let toStringValue = Symbol("key1") // symbol -> string, value: Symbol(key1)
// let toStringValue = true // boolean -> string, value: true
// let toStringValue = false // boolean -> string, value: false


console.log("Type before conversion->", typeof toStringValue);
let valueInString = String(toStringValue)
console.log("Value after conversion->", valueInString);
console.log("Type after conversion->", typeof(valueInString));
*/


// ***************Operations*************
/*
let value = 3
let negValue = -value

console.log(negValue) // -3
console.log(typeof negValue) // number
*/

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);
*/

/*
let str1 = "Hello "
let str2 = "Aakash"
let str3 = str1 + str2
console.log(str3)
*/

/*
console.log("1" + 2); // 12
console.log(typeof ("1" + 2)); // string
console.log(1 + "2") // 12
console.log(typeof(1 + "2")) // string
console.log("1" + 2 + 2); // 122
console.log(typeof("1" + 2 + 2)); // string
console.log(1 + 2 + "2") // 32
console.log(typeof(1 + 2 + "2")) // string
*/

/*
console.log(true) // true
console.log(+true); // 1(conversion from boolean to number)(It is not prefered to use as it has less readability)
// console.log(true+); // Error
console.log(+"") // 0(conversion from string to number)(It is not prefered to use it as it has less readability)
*/

/*
let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // (It is not prefered to use it as it has less readability)
console.table([num1, num2, num3]);

let num1, num2, num3 = 3 = 3 // SyntaxError: Invalid left-hand side in assignment
*/

/*
let gameCounter = 100
// gameCounter++
++gameCounter
console.log(gameCounter); // 101
*/

let gameCounter = 100
// console.log(++gameCounter) // 101
console.log(gameCounter++) // 100

