/*
let letDeclaration = 10
const constDeclaration = 20
var varDeclaration = 30 

console.log(letDeclaration); // 10
console.log(constDeclaration); // 20
console.log(varDeclaration); // 30
*/


/*
{} // It is a Scope of functions, if-else, loops, etc. Don't think it object declaration that is different from scoping.

// variable with var declaration has an issue of functional as well as block scoping.

if(true){
    // local scope: Must not be accessible from global scope. 
    let letDeclaration = 10
    const constDeclaration = 20
    var varDeclaration = 30 
}

// console.log(letDeclaration); // ReferenceError: letDeclaration is not defined(EXPECTED BEHAVIOUR)
// console.log(constDeclaration); // ReferenceError: constDeclaration is not defined(EXPECTED BEHAVIOUR)
console.log(varDeclaration); // 30(This is the problem of scoping with var)
*/

/*
var letDeclaration = 300
if(true){
    let letDeclaration = 10
    const constDeclaration = 20
    var varDeclaration = 30
}

console.log(letDeclaration); // 300(EXPECTED BEHAVIOUR)
*/

/*
var constDeclaration = 300
if(true){
    let letDeclaration = 10
    const constDeclaration = 20
    var varDeclaration = 30
}

console.log(constDeclaration); // 300(EXPECTED BEHAVIOUR)
*/

/*
var varDeclaration = 300 // Scope is global
if(true){
    // local scope: Must not be accessible from global scope. 
    let letDeclaration = 10
    const constDeclaration = 20
    var varDeclaration = 30 
}

// console.log(letDeclaration); // ReferenceError: letDeclaration is not defined(EXPECTED BEHAVIOUR)
// console.log(constDeclaration); // ReferenceError: constDeclaration is not defined(EXPECTED BEHAVIOUR)
console.log(varDeclaration); // 30(This is the problem of scoping with var)
*/


/*
var varDeclaration = 300 // Scope is global
if(true){
    // local scope: Must not be accessible from global scope. 
    let letDeclaration = 10
    const constDeclaration = 20
    varDeclaration = 30 // Evenif strict mode is enabled globally, still no error as local variable is undeclared.
}

// console.log(letDeclaration); // ReferenceError: letDeclaration is not defined(EXPECTED BEHAVIOUR)
// console.log(constDeclaration); // ReferenceError: constDeclaration is not defined(EXPECTED BEHAVIOUR)
console.log(varDeclaration); // 30(This is the problem of scoping with var)
*/


/*
let letDeclaration = 100 // Scope is global
const constDeclaration = 200 // Scope is global
if(true){
    // local scope: Must not be accessible from global scope. 
    // local scope: Must be accessible from local scope only
    let letDeclaration = 10
    const constDeclaration = 20
    console.log("letDeclaration local scope->", letDeclaration); // 10(EXPECTED BEHAVIOUR)
    console.log("constDeclaration local scope->", constDeclaration); // 20(EXPECTED BEHAVIOUR)
}

console.log("letDeclaration global scope->", letDeclaration); // 100(EXPECTED BEHAVIOUR)
console.log("constDeclaration global scope->", constDeclaration); // 200(EXPECTED BEHAVIOUR)
*/

/*
var varDeclaration = 300
if(true){
    let letDeclaration = 10
    const constDeclaration = 20
    var varDeclaration = 30
    console.log(letDeclaration); // 10
    console.log(constDeclaration); // 20
    console.log(varDeclaration); // 30
}

console.log(letDeclaration); // 100
console.log(constDeclaration); // 200
console.log(varDeclaration); // 30
*/

/*
let letDeclaration = 100 // Scope is global
const constDeclaration = 200 // Scope is global
let letGlobalScope = 300 // Scope is global
const constGlobalScope = 400 // Scope is global
if(true){
    // local scope: Must not be accessible from global scope. 
    // local scope: Must be accessible from local scope only
    // Global scope can be accessible from local scope as well
    let letDeclaration = 10
    const constDeclaration = 20
    console.log("letDeclaration local scope->", letDeclaration); // 10(EXPECTED BEHAVIOUR)
    console.log("constDeclaration local scope->", constDeclaration); // 20(EXPECTED BEHAVIOUR)
    console.log(letGlobalScope); // 300(EXPECTED BEHAVIOUR)
    console.log(constGlobalScope); // 400(EXPECTED BEHAVIOUR)
}

console.log("letDeclaration global scope->", letDeclaration); // 100(EXPECTED BEHAVIOUR)
console.log("constDeclaration global scope->", constDeclaration); // 200(EXPECTED BEHAVIOUR)
*/

/*
var myVal = 1;
myFunc1();
myFunc2();
console.log(myVal);

function myFunc1(){
    var myVal = 10;
    console.log(myVal);
}

function myFunc2(){
    var myVal = 100;
    console.log(myVal);
}
*/

/*
function functionOne(){
    const username = "aakash"

    function functionTwo(){
        const website = "xyz"
        console.log(username); // aakash
    }

    console.log(website); // ReferenceError: website is not defined

    functionTwo() 

}

functionOne()
*/


/*
if(true){
    const username = "aakash"
    if(true){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); // ReferenceError: website is not defined(EXPECTED BEHAVIOUR)
}

//console.log(username); // ReferenceError: username is not defined(EXPECTED BEHAVIOUR)
*/


/*
console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
*/

/*
console.log(addTwo(5)); // 7(NO ERROR)
function addTwo(num){
    return num + 2
}
*/

// Hoisting by which you can access these variables and functions even before you have initialized these or before putting any value in it and accessing these without getting any errors.

/*
var username = 'aakash'

function greetUser(){
    console.log(`Hello, User`);
}

greetUser() // Hello, User
console.log(username); // aakash
*/

/*
greetUser() // Hello, User
console.log(username); // undefined

var username = 'aakash'

function greetUser(){
    console.log(`Hello, User`);
}
*/

/*
greetUser() // Hello, User
console.log(username); // ReferenceError: username is not defined

function greetUser(){
    console.log(`Hello, User`);
}
*/

/*
function greetUser(){
    console.log(`Hello, User`);
}

console.log(greetUser); // function reference or return the function itself
*/

/*
console.log(greetUser); // function reference or return the function itself
function greetUser(){
    console.log(`Hello, User`);
}
*/

/*
greetUser() // Hello, User
console.log(username); // undefined
console.log(greetUser); // return function itself

var username = 'aakash'

function greetUser(){
    console.log(`Hello, User`);
}
*/

/*
greetUser() 
console.log(username); 
console.log(greetUser); 
var username = 'aakash'

var greetUser = () => {
    console.log(`Hello, User`);
}
*/

/*
greetUser() 
console.log(username); 
console.log(greetUser); 
var username = 'aakash'

var greetUser = () => {
    console.log(`Hello, User`);
}

var greetUser2 = function(){
    console.log(`Hello, User`);
}
*/