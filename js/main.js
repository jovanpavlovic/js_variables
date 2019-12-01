// TASK 1

 var firstNum = 15;
 var secondNum = -2;
 var thirdNum = 22;
 var fourthNum = 0;
 var fifthNum = 13;

if (firstNum > secondNum && firstNum > thirdNum && firstNum > fourthNum && firstNum > fifthNum) {

	console.log("The largest number is "  + firstNum + ".");

} else if (secondNum > firstNum && secondNum > thirdNum && secondNum > fourthNum && secondNum > fifthNum) {

	console.log("The largest number is "  + secondNum + ".");

} else if (thirdNum > firstNum && thirdNum > secondNum && thirdNum > fourthNum && thirdNum > fifthNum) {

	console.log("The largest number is "  + thirdNum + ".");

} else if (fourthNum > firstNum && fourthNum > secondNum && fourthNum > thirdhNum && fourthNum > fifthNum) {

	console.log("The largest number is "  + fourthNum + ".");

} else {

	console.log("The largest number is "  + fifthNum + ".");
}

// TASK 2

var a = 3;
var b = -7;
var c = 2;
var product = a * b * c;

if (product>0) {
	console.log("The sign of product of three numbers is plus (+)");
} else if (product<0) {
	console.log("The sign of product of three numbers is minus (-)");
} 
// u slucaju da je jedna od varijabli 0
else {
	console.log("Product of three numbers is 0");
}

// TASK 3

var lang = "Japanese";

switch (lang) {
  case "Japanese": console.log("こんにちは世界!");
  case "English": console.log("Hello World!");
  case "German": console.log("Hallo Welt!");
  case "Serbian": console.log("Zdravo Svete!");
  case "Ukranian": console.log("Привіт Світ!");
  // default:console.log("Lorem ipsum");
}

// TASK 4 :

var userAge = 18;
var z;

userAge >= 28 ? z = true : z = false;

if (!z) {
	console.log("User is less than 28 years old.");
} else if (userAge > 28) {
  console.log("User is older than 28.");
} else {
  console.log("User is 28 years old.");
}