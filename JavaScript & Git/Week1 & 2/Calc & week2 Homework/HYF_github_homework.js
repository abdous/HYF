// Section 1
var helloWorld = ['Halo, dunia!', 'Ciao, mondo!', 'Hola, mundo!'];
console.log(helloWorld);

// Section 2
console.log('I\'m awesome'); // backslash sign should be used,
console.log("I'm awesome"); // or double quotation marks.
// Section 3
var x;
console.log('the value of my variable x will be: ' + x); //the value of my variable x will be: undefined

x = 2;
console.log('the new value of my variable x will be: ' + x); //the value of my variable x will be: 2

// Section 4
var y = 'cat'
console.log('the value of my variable y will be: ' + y); //the value of my variable y will be: cat

var y = 'dog'
console.log('the new value of my variable y will be: ' + y); //the value of my variable y will be: dog

 // Section 5
var z = 7.25;
console.log(z);

var a = 7;
console.log(a);

if (a > z) {
    console.log(a);
}
else {
    console.log(z);
}

// Section 6
var animals = [];
console.log('the value will be ' + animals); // the value will be an empty array

var animals = ['dog', 'cat', 'bird'];
console.log('my favorite animals are ' + animals); // the value will be dogs, cats & birds

animals[3] = 'baby pig';
console.log(animals); // the value will be dog, cat, bird & baby pig

// Section 7
let myString = 'This is my string';
console.log('The length of myString is ' + myString.length); // the value will be the number of all characters & spaces inside the string

// Section 8
let string = 'String';
console.log('The value of my variable is: ' + string); // The value of my variable is String

let number = 1;
console.log('The value of my variable is: ' + number); // The value of my variable is 1

let boolean = true;
console.log('The value of my variable is: ' + boolean); // The value of my variable is True

let arrayOfStrings = ['First', 'Second', 'Third'];
console.log('The value of my variable is: ' + arrayOfStrings); // The value of my variable is First, Second, Third

console.log('The type of my variables are: ' + typeof 'String', typeof 1, typeof true, typeof ['First', 'Second', 'Third']); // The type of my variables are: string number boolean object

if (typeof 'String' == typeof 1) {
    console.log('SAME TYPE')
}
else {
    console.log('DIFFERENT TYPES')
}

// Section 9
var x = 7;
var x = x % 3;
console.log(x); // The result will be 1, as 3 goes twice inside 7 and keeps 1 as a leftover

var x = 5;
var x = x % 3;
console.log(x); // The result will be 2, as 3 goes once inside 5 and keeps 2 as a leftover

var x = 14;
var x = x % 12;
console.log(x); // The result will be 2, as 12 goes once inside 14 and keeps 2 as a leftover

var x = 5.5;
var x = x % 2;
console.log(x); // The result will be 1.5, as 2 goes twice inside 5.5 and keeps 1.5 as a leftover

var x = -1;
var x = x % 2;
console.log(x); // (NOT SURE) The result will be -1, becuase the dividend is smaller than the divisor

console.log(1 % -2); // (NOT SURE) The result will be 1, becuase the divisor is negative

console.log(NaN % 2); // The result will be NaN, because If either operand is NaN, the result is NaN.

// Section 10
var multiTypesArray = ['first', 1, true, null];
console.log(multiTypesArray); // The value is <first, 1, true, null>

console.log(6/0 === 10/0); // The value is <true>

//END OF FILE
