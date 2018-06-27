// Homework js / week3 / step4/ 1.Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString); // 1.1 logging the string
console.log(myString.length); // 1.2 logging the length of the string
let newMyString = myString.replace(/,/g, ' '); // 1.3 used .replace() function to replace the comma with empty string AND used RegExp to apply the function to all occurrences, and finally store results in new string
console.log(newMyString); // 1.4 logging the content of the new string

// 2.Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle'); // 2.1 used .push method to add new index to the end of the array
console.log(favoriteAnimals); // 2.2 logging result

favoriteAnimals.splice(1, 0, 'meerkat'); // 2.3 used .splite() method to insert string at 1st index position
console.log(["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]); // 2.4 logging what I think the result will be
console.log(favoriteAnimals); // 2.5 logging new result
console.log('The array has a length of: ' + favoriteAnimals.length); // 2.6 looging the length of the array
favoriteAnimals.splice(3, 1); // 2.7 deleting third element using same .splice() method
console.log(favoriteAnimals); // 2.8 logging new result
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat')); // 2.10 logging the result 
favoriteAnimals.splice(1, 1); // 2.9 deleting the index after knowing its position