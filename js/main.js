// TASK 1
console.log("TASK 1");

var myArray = [
  [[1],[2],[3]],
  [[4],[5],[6]],
  [[7],[8],[9]]
];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log("At position " + i + ", subposition " + j + ", value is " + myArray[i][j][0]);
  }
}


// TASK 2
console.log("TASK 2");

var nameAge = function() {
  console.log("I am " + this.name + ", and I have " + this.age + " years.");
}

var students = [
  {
    name: "Jack",
    age: 32
  }, 
  {
    name: "Tom",
    age: 30
  }, 
  {
    name: "Peter",
    age: 21
  }
];

for (var i = 0; i < students.length; i++) {
  students[i].printData = nameAge;
  students[i].printData();
}