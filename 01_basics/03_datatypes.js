"use strict"; // Treat all JS code as a newer version of JavaScript

// alert( 3 + 3 ) // ReferenceError: alert is not defined because it doesn't work with nodejs but works with browser console

console.log( 3 + 3 ) // 6
console.log(typeof (3 + 3)); // number

// console.log(Hello) console.log("Aakash") // Error as it is not allowed without semicolon after first console.log

console.log("Hello"); console.log("Aakash") // No Error but still it is not preferred to write this way which shows the "poor code readability"

// Below is the prefered way as it shows good readability
console.log("Hello")
console.log("Aakash")

let name = "Aakash" // string type value i.e. "Aakash"
let age = 18 // number type value i.e 18
let isLoggedIn = false // boolean type value i.e. false
let state; // value is "undefined"
let passed = null // null is a standalone value means empty value but not undefined

// symbol -> to find "uniqueness"[mostly used in the implementation of react to find uniqueness of components]
// Above all are primitive datatypes. List of primitive datatypes are number, string, boolean, bigint, null, undefined, symbol.

console.log(typeof "Aakash"); // Output: string
console.log(typeof age); // Output: number
console.log(typeof null) // Output: Object(Interview question)
console.log(typeof undefined) // Output: undefined(Interview question)

// object, array and function are non-primitive datatypes
