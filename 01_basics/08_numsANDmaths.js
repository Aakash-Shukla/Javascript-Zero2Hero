const score = 400
console.log(typeof score); // number
console.log(score);

const balance = new Number(100) 
console.log(typeof balance); // Browser console-> Number {100}, nodejs-> [Number: 100]
console.log(balance);

/*
Number {100}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
*/

console.log(balance.toString()); // 100
console.log(typeof (balance.toString())); // string

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00
console.log(typeof(balance.toFixed(2))); // string

// const otherNumber = 23.8966
// const otherNumber = 123.8966
const otherNumber = 1123.8966

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000(US Standard)
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000(Indian Standard)

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


// ********************Maths************
console.log(Math); // Math object
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4 
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8
console.log(Math.random()); // Value between 0 & 1
console.log(Math.floor((Math.random() * 10) + 1)); // value between 1 and 10

const min = 10
const max = 20
console.log(Math.round((Math.random() * (max - min)) + min)); // value from 10 to 20




