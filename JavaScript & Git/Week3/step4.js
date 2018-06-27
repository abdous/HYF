// Homework js week3 step4
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString); // 1.1 logging the string
console.log(myString.length); // 1.2 logging the length of the string
let newMyString = myString.replace(/,/g, ' '); // 1.3 used replace() function to replace the comma with empty string AND used RegExp to apply the function to all occurrences, and finally store results in new string
console.log(newMyString); // 1.4 logging the content of the new string