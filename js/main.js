// TASK 1

// function available(){
//  if (window.navigator.onLine) {
//    alert("Browser is online.")
//  }
//  else
//  {
//    alert("Browser is offline.")
//  }
// }

// available();

//TASK 2

// function reload(){

//  window.location.reload();

// }

// reload();

// TASK 3

// console.log("Task 3");

// function goToGoogle(){

//  setTimeout(function(){
//    window.location.href = "http://google.com";
//  }, 3000);
// }

// goToGoogle();

// TASK 4

// var num = 0;

// function printNumber(){
//  num++;
//  console.log("Number value is "+ num)

//  if (num>=15) {
//    clearInterval(int);
//  }
// }

// var int = setInterval(printNumber, 1000)

// TASK 5

// function randomNumber(){
//  console.log(Math.round(Math.random()*10));
// }

// randomNumber();

// TASK 6

// var users = [
//  {
//    name: "John",
//    age: 46,
//    status: "inactive"
//  },
//  {
//    name: "Rachel",
//    age: 32,
//    status: "inactive"
//  },
//  {
//    name: "Mike",
//    age: 63,
//    status: "inactive"
//  },
//  {
//    name: "Michael",
//    age: 15,
//    status: "inactive"
//  },
//  {
//    name: "Peter",
//    age: 28,
//    status: "inactive"
//  }
// ];

// var userCheck = prompt("Enter your name:");
// var newUser;

// newUser = users.filter(function(newUser){

//  if (userCheck.toLowerCase() === newUser.name.toLowerCase()) {

//    console.log("Hi, " + newUser.name + "!" + " You`re logged in.");

//    newUser.status = "active";

//    return newUser.name;
//  } 
// });

//  if (newUser.length === 0) {

//    console.log("User with name " + "*" + userCheck.toUpperCase() + "*"  + " does not exist.");
//  } 

//  else 

//  {

//    this.localStorage.setItem("newUser", newUser[0].name);

//    setTimeout(function(){

//        this.localStorage.removeItem("newUser");

//        console.log(newUser.name + "You`re logged out!");

//        newUser[0].status = "inactive";

//        newUser = undefined;

//    }, 60000);
//  }