/* Comparision between numbers only
console.log(2 > 1) // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(02 > 1) // true if strict mode is not enabled otherwise we will get SyntaxError: Octal literals are not allowed in strict mode.
*/

/* During comparision, stringNumber will convert into number(It is not prefered way of comparing two values)
console.log("2" > 1) // true(It is not prefered way of comparing two values)
console.log("02" > 1) // true(It is not prefered way of comparing two values)
*/

/* During comparision, null converts into 0 except for equality check(==)
// (It is not prefered way of comparing two values)
console.log(null > 0); // (comparision converts null to 0) -> false
console.log(null >= 0); // (comparision converts null to 0) -> true
console.log(null < 0); // (comparision converts null to 0) -> false
console.log(null <= 0); // (comparision converts null to 0) -> true
console.log(null == 0); // (equality check == works differently than <,<=,>,>=) -> false
*/

/*
// In case of undefined, for every comparision operation, we get always 'false' value
// (It is not prefered way of comparing two values)
console.log(undefined < 1); // false
console.log(undefined <= 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined == 0); // false
*/

// strict check '===' not only checks for the value but also checks for the datatype
console.log("2" == 2) // true
console.log("2" === 2) // false