const empArr = [] // Empty array
// console.log(empArr);
// console.log(typeof empArr); // object(Array object)

const myArr = [10, 11, 12, 13, 14, 15, true, "aakash"] // array with elements of different types 
// Array object with properties such as below
/*
0: 10
1: 11
2: 12
3: 13
4: 14
5: 15
length: 6
*/

// JavaScript arrays are resizable.

// console.log(myArr); 
// console.log(typeof myArr); // object(Array object)
// console.log(myArr[0]); // When key is a number, use bracket notation
// console.log(myArr[1]); // When key is a number, use bracket notation
// console.log(myArr.length);
// console.log(myArr['length']);

// There are two ways of declaring arrays
const myHeros = ["shaktiman", "naagraj"] // first way
const myArr2 = new Array(21, 22, 23, 24) // second way

// Do all above stuff on both VS and browser console.

// Array object has Array.prototype object. Array.prototype object has Object.prototype object. Object.prototype object has no further prototype i.e. null.


//*************Array methods*************

// myArr.push(16) // Append element at last
// myArr.pop() // Remove element at last
// myArr.unshift(19) // Append element at start(0th index)
// myArr.shift() // Remove element at start(0th index)
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1 because element 9 is not present in array
// console.log(myArr.indexOf(13)); // 3 because element 13 is present in array
console.log(myArr);

/*
const myString = myArr.join() // join() returns string
console.log(myArr);
console.log(typeof myArr); // object(Array object)
console.log(myString);
console.log(typeof myString); // string
*/

/*
const myArr3 = [0, 1, 2, 3, 4, 5]
console.log("Original array->", myArr3);

const mySlice = myArr3.slice(1, 3) // slice returns new array
console.log("Slice operation->", mySlice);
console.log("Original array after slicing->", myArr3); // original array not impacted after slicing

const mySplice = myArr3.splice(1, 3) // splice returns new array
console.log("Splice operation->", mySplice);
console.log("Original array after splicing->", myArr3); // original array impacted after splicing
*/

/*
// Combining two arrays
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["batman", "superman", "aquaman"]
// marvel_heros.push(dc_heros) // Array inside array(Incorrect way of combining two arrays)(array 'marvel_heros' will be impacted)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// Less used correct way of combining two arrays
const allHeros = marvel_heros.concat(dc_heros) // concat returns new array
console.log(allHeros); 

// Mostly used and best way of combining two arrays
const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);
*/

/*
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // flat returns new array
console.log(realAnotherArray);
*/

console.log(Array.isArray("Aakash")) // false

console.log(Array.from("Aakash")) // [ 'A', 'a', 'k', 'a', 's', 'h' ]

console.log(Array.from({name: "aakash"})); // [] because failed to create an array from object

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));





