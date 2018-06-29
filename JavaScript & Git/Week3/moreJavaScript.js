// More JavaScript
// 1.Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(a, b, c) {
    return a + b + c;
}
sum(1, 2, 3); //calling the function 

// 2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    return 'a ' + color + ' car.';
}
colorCar('red');

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
function myFunction(obj) {
    alert(obj.firstName);
    alert(obj.lastName);
    alert(obj.age);
}
myFunction({
    firstName: 'Luay',
    lastName: 'Adam',
    age: 33
});
// or
// let info = {
//     firstName: 'Luay',
//     lastName: 'Adam',
//     age: 33
// };
// myFunction(info);

// 4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code === 1) {
        console.log('a ' + color + ' car');
    } else if (code === 2) {
        console.log('a ' + color + ' motorbike');
    }
}
vehicleType("blue", 2); // will log 'a blue motorbike'

// 5.Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }
console.log(3 === 3 ? 'yes' : 'no'); // will log 'yes'

// 6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, age, code) {
    if (code === 1 && age <= 1) {
        console.log('a ' + color + ' new' + ' car');
    } else if (code === 1 && age > 1) {
        console.log('a ' + color + ' used' + ' car');
    } else if (code === 2 && age <= 1) {
        console.log('a ' + color + ' new' + ' motorbike');
    } else if (code === 2 && age > 1) {
        console.log('a ' + color + ' used' + ' motorbike');
    }
}
vehicle("red", 2, 5); // will log 'a red used motorbike'

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicleList = ["motorbike", "caravan", "bike"];


// 8. How do you get the third element from that list?
vehicleList[2];

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, vehicleType, age) {
    if (age <= 1) {
        console.log('a ' + color + ' new ' + vehicleList[vehicleType]);
    } else if (age > 1) {
        console.log('a ' + color + ' used ' + vehicleList[vehicleType]);
    }
}
vehicle("red", 1, 1);

// 10. Use the list of vehicles to write an advertisement.
let garageAd = "Amazing Joe's Garage, we service "
for (let i = 0; i < vehicleList.length; i++) {
    if (i === vehicleList.length - 1) {
        garageAd = garageAd + "and " + vehicleList[i] + "s.";
    } else {
        garageAd = garageAd + vehicleList[i] + "s, ";
    }
}
console.log(garageAd);

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicleList.push('car');

// 12. Create an empty object.
let obj = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.
obj.TeachersName = 'Nick, Miet, Tiago, Rob, Claudio';

// 14. Add a property to the object you just created that contains the languages that they have taught you.
obj.languages = 'HTML, CSS, JS'; 
console.log(obj);

// 15. Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); // return false, because it compares the name of the two arrays, NOT the their elements
console.log(x === y); // return false, because it compares the name of the two arrays, NOT the their elements
console.log(z == y); // return true, because we asigned a new variable name to the array Y earlier, so basically they have the same value
console.log(z == x); // return false, because z = y and y == x is FALSE as we checked earlier 

// 16. Take a look at the following code:
let o1 = {
    foo: 'bar'
}; // changing the name of the variable o1 will have no effect on o3 
let o2 = {
    foo: 'bar'
}; // changing the name of the variable o2 will make the variable o3 asigned to an 'undefined' variable.
let o3 = o2;

// 17. What does the following code return? (And why?)
let bar = 42;
typeof typeof bar; // returns 'string', because 1st typeof will return the word >"number"< as string (the word >number< inside qoutation double marks >""<), so the 2nd typeof will chech the first return "number" and return "string".

// END OF FILE // 
// Friday Jun 29, 2:55am //