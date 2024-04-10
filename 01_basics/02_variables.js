// "use strict"; // Its not a statement but a literal expression
// JavaScript code should be executed in "strict mode. Read: https://www.w3schools.com/js/js_strict.asp

// Variables are declared and initialized
const accountId = 144553 // accountId is variable with const declaration
let accountEmail = "aakash@google.com" // accountEmail is variable with let declaration
var accountPassword = "12345" // accountPassword is variable with var declaration

// accountCity is not declared but initialized
accountCity = "Jaipur" // ReferenceError: accountCity is not defined because we have enabled the strict mode otherwise it works.

// variable with let declaration may or may not be initialized
let accountState;  // 'undefined' as value if not initialized

// const declaration must be initilized
// const accountState; // ERROR, not due to strict mode

// accountId = 2 // TypeError: Assignment to constant variable. Any variable with const declaration can never be re-initialized
// console.log(accountId); 

/* IMPORTANT POINTS:-
Prefer not to use 'var' because of issue in block scope and functional scope.

Prefer to use 'const' and 'let' only

Prefer not to declare a variable without 'const' or 'let' declaration
*/

accountEmail = "hc@hc.com" // Variable with let declaration can be re-initialized
accountPassword = "21212121" // Variable with var declaration can be re-initialized
accountCity = "Bangaluru" // We can reassign undeclared variable if there is no strict mode enabled

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

