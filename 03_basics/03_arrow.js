// In order to understand the arrow function, need to understand "this" keyword and in order to understand the this keywork, need to understand the object.

/*
const user = {
    username: "aakash", // value of username may change anytime later
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // ${username} will throw an error
        console.log(this); // 'this' refers to the Current context of an object means currect values present now in an object
    }
}


// 'this' keyword tells about current context within curly brackes of an object. Current context means currect values present now in an object

user.welcomeMessage // NOTHING will be printed out
console.log(user.welcomeMessage);

user.welcomeMessage()
user.username = "Sammy" // context has changed means value has changed
user.welcomeMessage()
*/


/*
console.log(this); // {} -> an empty object in node environment means 'this' refering to an empty object in node environment. An empty object {} refered by 'this' is a "global object" in node environment

console.log(this); // 'this' refers to Window object in browser console environment. Window object is "global object" in browser console.
*/

/*
const user = {
    username: "aakash",
    price: 199,
    welcomeMessage: function(){
        console.log(this.username);
        console.log(this.email); // undefined
    }
}

user.welcomeMessage()
*/


/*
function functionOne(){
    console.log(this); // There is no concept like current context in functions.
}

functionOne() // Get lots of values in global object in case of node environment. In case of browser console, get the Window object with events.
*/

/*
function functionOne(){
    const username = "aakash"
    console.log(this.username); // "undefined" because 'this' doesn't work like this with functions as it was working with objects.
}
functionOne()
*/

/*
const result = function() {
    const username = 'aakash'
    console.log(this.username); // undefined
}

result()
*/

/*
//Arrow function(Remove keywork 'function' from before () and add '=>' after ())
const result = () => {
    const username = 'aakash'
    console.log(this.username); // undefined
}
result()
*/

/*
const result = () => {
    const username = 'aakash'
    console.log(this); // {} -> Empty global object in case of node environment. In case of browser console, get the Window object with events.
}
result()
*/

/*
// Within the curly braces, return keywork works only with {}
const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumbers(3, 5)); // 8
*/

/*
//Implicit return method
const addTwoNumbers = (num1, num2) => num1 + num2
console.log(addTwoNumbers(3, 5));
*/

/*
// Implicit return with parenthesis
// Within parenthesis, don't use return 
const addTwoNumbers = (num1, num2) => (
    num1 + num2
)
console.log(addTwoNumbers(3, 6));
*/


/*
// Return object without using return keywork
const addTwoNumbers = (num1, num2) => (
    {username: "Aakash"}
)
console.log(addTwoNumbers(3, 7)); // { username: 'Aakash' }
*/


/*
// Note: with foreach() method of an array, we can use all above discussed functions

const myArray = [10, 20, 30, 40, 50]
// myArray.forEach(function(){})
// myArray.forEach(() => {})
myArray.forEach((num1, num2) => (num1+num2))
*/


