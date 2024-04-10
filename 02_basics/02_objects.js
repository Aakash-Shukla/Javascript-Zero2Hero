// If object is declared as literal, it is not created as singleton object.

// In JavaScript, an object literal is a notation for creating objects using curly braces {}. This notation allows you to define and initialize an object's properties in a single expression.

// Each time you create an object using the object literal notation, you are creating a new and distinct object.

// Since object literals allow you to create new objects easily, you can create multiple instances of the same object. Each instance is independent of the others and can have its own unique properties and values.

/*
// Object literal declaration
let person1 = {
    name: "John",
    age: 30
};

// Another instance of the same object
let person2 = {
    name: "Jane",
    age: 25
};

// Both person1 and person2 are independent instances
console.log(person1.name); // Output: "John"
console.log(person2.name); // Output: "Jane"
*/

// If object is declared with the help of constructor, it is a singleton object.

//*************objec literal*************

let jsUser = {
    name: "Aakash", // JavaScript assumes key name as "name", also same applies to other property keys as well.
    "full name": "Aakash Shukla",
    age: 18,
    location: "Jaipur",
    email: "aakash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
    // Object can also have object as well
}

// console.log(jsUser.email); // DOT notation
// console.log(jsUser[email]); // Bracket notation needs single quotes or double quotes. ERROR: email is not defined
// console.log(jsUser['email']); 
// console.log(jsUser["email"]); 
//console.log(jsUser.full name); // ERROR:-Not possible using dot notation
//console.log(jsUser."full name"); // ERROR:-Not possible using dot notation
//console.log(jsUser.'full name'); // ERROR:-Not possible using dot notation
// console.log(jsUser["full name"]); // Aakash Shukla

// Use Symbol as key of an object
const mySym = Symbol("key1") // Creating a symbol
// console.log(typeof mySym); // symbol
// console.log(mySym); // Symbol(key1)

jsUser = {
    name: "Hitesh", // JavaScript assume key name as "name".
    "full name": "Aakash Shukla",
    age: 18,
    location: "Jaiput",
    email: "aakash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    // It can also have object as well
    [mySym]: "myKey1" // Correct way of using symbol mySym as key in an object
}

// console.log(jsUser) // Look at symbol in output i.e. [Symbol(key1)]: 'myKey1'
// console.log(jsUser[mySym]); // myKey1 [Using bracket notation][Not possible to access symbol with dot notation]
// console.log(typeof jsUser[mySym]); // string

/*
const mySym2 = Symbol("key2")
jsUser = {
    name: "Hitesh", // JavaScript assume key name as "name".
    "full name": "Aakash Shukla",
    age: 18,
    location: "Jaiput",
    email: "aakash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    // It can also have object as well
    mySym2: "myKey2" // Incorrect way of using symbol mySym2 as key in an object
}

console.log(jsUser) // mySym2: 'myKey2'
console.log(jsUser[mySym2]) // undefined
console.log(typeof jsUser[mySym2]) // undefined
*/

/*
// Modify property value of an object
jsUser.email = "aakash@chatgpt.com"
console.log(jsUser.email)
*/

/*
// Prevent an object for any modification
Object.freeze(jsUser)
jsUser.email = "aakash@microsoft.com"
console.log(jsUser.email)
*/

/*
jsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(jsUser); // Look at greeting function
console.log(jsUser.greeting); // Function reference
console.log(jsUser.greeting()); // Function output & undefined but ignore undefined after function output

jsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name} `); // Refer object jsUser using 'this' if refering through the method inside an object
}
console.log(jsUser);
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo()); // Function output and undefined but  ignore undefined after function output
*/

//**************Singletone object*********

/*
// First way of object declaration
const tinderUser = new Object() // Empty object created using constructor
console.log(tinderUser); // Singleton object
*/

/*
// Second way of object declaration using object literal
const tinderUser = {} // Non singleton object
tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }
*/

/*
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aakash",
            lastname: "shukla"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);
*/

/*
// Combine two objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

//Incorrect way of combining the objects
// const obj3 = { obj1, obj2 }
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// First less used correct way of combining the objects
// const obj3 = Object.assign({}, obj1, obj2) // {} acts as a target object (optional) and obj1 & obj2 act as source objects. If {} is not present as target object then source object1 i.e. obj1 will be impacted.
// console.log('obj3->', obj3);
// console.log('obj1->', obj1);
// console.log('obj2->', obj2);

// Second mostly used correct & best way of combining the objects(Always prefer it)
const obj3 = {...obj1, ...obj2}
console.log(obj3);
*/

/*
// Array of objects
const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }
]

// console.log(users);
// console.log(users[1]);
// console.log(users[1].email);
console.log(users[1]['email']);
*/

/*
const tinderUser = {} // Non singleton object
tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // Array of keys

console.log(Object.values(tinderUser)); // Array of values

console.log(Object.entries(tinderUser)); // Array of arrays with elements as key and value of each parameter. If object has 3 parameters then array will have 3 subarrays

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('lastLoginDay')); // false
*/

// Destructuring is possible for arrays as well as objects
// Object destructuring
// ---------------------------

const course = {
    courseName: "Javascript zero2hero",
    coursePrice: 999,
    courseInstructor: "aakash"
}


// console.log(course.courseInstructor); 

// Here, when you need to print course instructor again and again then you have to use syntax: course.courseInstructor. We can acheive same output by providing only property name i.e. courseInstructor as below:
// const {courseInstructor} = course
// console.log(courseInstructor);

// We can also define alias for property as below:
const {courseInstructor: instructor} = course
console.log(instructor);








