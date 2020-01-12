//TASK 1 

console.log("Task 1");

function Student(name,surname,age,avg){
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.avg = avg;
}

var mike = new Student("Mike", "Williams", 25, 7.8);
var peter = new Student("Peter", "Johnson", 23, 8.9);

console.log(mike, peter);

//TASK 2

console.log("Task 2");

function FootbalPlayer(name,age,goals,yellowCards){
  this.name = name;
  this.age = age;
  this.goals = goals;
  this.yellowCards = yellowCards;
}

FootbalPlayer.prototype.team = "Juventus";

var cristiano = new FootbalPlayer("Cristiano",34, 10, 0);
var paulo = new FootbalPlayer("Paulo",26, 8, 3);
var matthijs = new FootbalPlayer("Matthijs",20, 1, 2);
var adrien = new FootbalPlayer("Adrien",24, 0, 2);
var merih = new FootbalPlayer("Merih",21, 1, 1);

console.log(cristiano,paulo,matthijs,adrien,merih);

//TASK 3

console.log("Task 3")

function Player(name,age,gender,adress){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Player.prototype.team = "Juventus";

var footbalPlayers = [
["Cristiano",34, 10, 0],
["Paulo",26, 8, 3],
["Matthijs",20, 1, 2],
["Adrien",24, 0, 2],
["Merih",21, 1, 1],
];

function write(footbalPlayers){
  var newplayers = [];
  for (var i = 0; i < footbalPlayers.length; i++) {
    newplayers = new Player(footbalPlayers[i][0], footbalPlayers[i][1], footbalPlayers[i][2], footbalPlayers[i][3]);
    console.log(newplayers);
  }
}
write(footbalPlayers);

//TASK 4

console.log("TASK 4");

function Method(firstNum, secondNum, method) {
  this.firstNum = firstNum;
  this.secondNum = secondNum;
  this.result = function() {
    return method(this.firstNum, this.secondNum);
  };
}

function add(firstNum, secondNum) {
  var x = firstNum + secondNum;
  return x;
}
function substract(firstNum, secondNum) {
  var x = firstNum - secondNum;
  return x;
}
function multiply(firstNum, secondNum) {
  var x = firstNum * secondNum;
  return x;
}
function divide(firstNum, secondNum) {
  var x = firstNum / secondNum;
  return x;
}


var addition = new Method(11, 9, add);
console.log("11 + 9 = " + addition.result());

var substraction = new Method(8, 7, substract);
console.log("8 - 7 = " + substraction.result());

var multiplication = new Method(9, 5, multiply);
console.log("9 * 5 = " +multiplication.result());

var division = new Method(45, 5, divide);
console.log("45 / 5  = " +  division.result());