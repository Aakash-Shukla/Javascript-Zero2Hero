let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); // object

/*
let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());
*/

/*
let myCreatedDate = new Date(2024, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());
*/

/*
let myCreatedDate = new Date("2024-01-23")
console.log(myCreatedDate.toLocaleString());
*/


let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

// Comparision of date should happen in milisec only
let myTimestamp = Date.now()
console.log(myTimestamp); // total milisec since 1 jan 1970 till now

console.log(myCreatedDate.getTime()); // millisec

console.log(Math.floor(Date.now()/1000)); // seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}))





