function sayMyName(){  // Classic function
    // function definition within {} that defines the function scope
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

console.log(sayMyName); // function reference that is location of function in memory
sayMyName() // function execution


/*
// number1 and number2 are known as parameters that are input to function definition
// function is not returning any value, only printing.
function addTwoNumbers(number1, number2){
    console.log(typeof number1); // undefined
    console.log(typeof(number2)); // undefined
    console.log(number1 + number2); // NaN
    console.log(typeof(number1 + number2)); // number
}
addTwoNumbers()

addTwoNumbers(3, 4) // Output: 7 because we provided two arguments of type number

addTwoNumbers(3, "4") // Output: 34 because javascript will convert 3(number) into 3(string) and concatenate with 4(string) and becomes 34(string)

addTwoNumbers(3, "a") // Output: 3a because javascript will convert 3(number) into 3(string) and concatenate with a(string) and becomes 3a(string)

addTwoNumbers(3, null) // Output: 3 because javascript will convert null(object) into 0(number) and add with 3(number) and becomes 3(number)

const result = addTwoNumbers(3, 5)
console.log(result); // undefined because function didn't return any value, only printing value.
*/


/*
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log("aakash"); // This statement will never executed according to the rule of function definition as it is after return statement
}

const result = addTwoNumbers(3, 5)
console.log(result); // 8 because function is returning result
*/


/*
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    console.log("aakash"); // Will get executed
    return result
}

const result = addTwoNumbers(3, 5)
console.log(result);
*/


/*
function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log(result); // 8
*/


/*
function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage('aakash') // NOTHING printed out
// const message = loginUserMessage('aakash')
// console.log(message); // aakash just logged in

const message = loginUserMessage()
console.log(message); // undefined just logged in
*/


/*
function loginUserMessage(username){
    if(username === undefined){
        return "Please enter a username"
    }
    return `${username} just logged in`
}

// const message = loginUserMessage()
// console.log(message); // Please enter a username

// const message = loginUserMessage('aakash')
// console.log(message); // aakash just logged in

const message = loginUserMessage('')
console.log(message); //  just logged in

const message = loginUserMessage(null)
console.log(message); // null just logged in
*/


/*
function loginUserMessage(username){
    if(!username){
        return "Please enter a username"
    }
    return `${username} just logged in`
}

// const message = loginUserMessage()
// console.log(message); // Please enter a username

// const message = loginUserMessage('')
// console.log(message); // Please enter a username

// const message = loginUserMessage(null)
// console.log(message); // Please enter a username

const message = loginUserMessage('aakash')
console.log(message); // aakash just logged in
*/


/*
// Default parameter value if argument is empty
function loginUserMessage(username = 'Guest'){
    if(!username){
        return "Please enter a username"
    }
    return `${username} just logged in`
}

// const message = loginUserMessage()
// console.log(message); // Guest just logged in

// const message = loginUserMessage('')
// console.log(message); // Please enter a username

// const message = loginUserMessage(null)
// console.log(message); // Please enter a username

const message = loginUserMessage('aakash')
console.log(message); // aakash just logged in
*/


// Suppose the case of shopping cart where user keep adding items in cart where we don't know exact items user will add. If this is the case then we need to look how to use those items as parameter in function so that we can calculate total of their prices. We can achieve it using "rest operator" in function as below:


/*
// cartItemsPrices is an array of arguments.
function calculateCartPrice(...cartItemsPrices){
    return cartItemsPrices
}

console.log(calculateCartPrice(200, 400, 600));
*/


/*
function calculateCartPrice(val1, val2, ...cartItemsPrices){
    return cartItemsPrices
}

console.log(calculateCartPrice(200, 400, 600, 800)); // value 200 stored in val1, value 400 stored in val2 and values 600 & 800 stored in cartItemsPrices array
*/


/*
const user = {
    username: "Aakash",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// In above code, we need to keep some points in mind: (1) Check if function is actually getting object as parameter (2) check if object actually includes mentioned keys before retrieving values from them

handleObject({
    username: 'sam',
    price: 399
})
*/


/*
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
*/

/*
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
*/







