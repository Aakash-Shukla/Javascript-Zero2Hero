// Immediately Invoked Function Expressions(IIFE)
// Jaise hi hmne function likha use turant hi execute karwana hai. Global scope ke pollution se problem hoti hai kai baar to global scope ke variable ke pollution ko remove krne ke liye iife ka use krte hai

// Suppose, There is a file has only database connection. We want that when application launches, immediately db connection should start happening through file.

/*
// Function implementation without IIFE
function myFunc(){ 
    console.log(`DB CONNECTED`);
}
myFunc()
*/

/*
// Function implementation with IIFE
(function myFunc(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})()
*/


/*
// Function implementation with IIFE
(function myFunc(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})() // TypeError: (intermediate value)(...) is not a function because there is no semicolon after after function don't know when to end

(function myFunc2(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})()
*/

/*
// Function implementation with IIFE
(function myFunc(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})();

(function myFunc2(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})()
*/

/*
// Function implementation with IIFE
(function myFunc(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB CONNECTED`);
})()
*/


/*
// Function implementation with IIFE(Passing arguments to function)
(function myFunc(){ // NAMED IIFE
    console.log(`DB CONNECTED`);
})();

((name) => { // name is parameter
    console.log(`DB CONNECTED for user ${name}`);
})('aakash') // Argument
*/
