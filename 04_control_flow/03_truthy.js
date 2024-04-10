// Truthy value

/*
const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/

/*
const userEmail = ""

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/

/*
const userEmail = []

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/

// falsy values: false, 0, -0, "", undefined, null, 0n(Bigint), NaN
// truthy values: all except falsy values but below are also truthy values:
/*
"0", 'false', " ", [], {}, function(){}
*/

/*
const myArr = []
if(myArr.length === 0){
    console.log("Array is empty");
}
*/

/*
const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}
*/

// Check on browser console
false == 0 // true
false == "" // true
0 == '' // true

/*
// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15 // 10

console.log(val1);
*/

/*
// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
*/

