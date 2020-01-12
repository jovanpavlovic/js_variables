
// TASK 1

console.log("Task 1");

var sentence = "Lorem ipsum dolor sit amet";

function lowercase(lowerSentence) {
  return lowerSentence.toLowerCase();
}

sentence = lowercase(sentence);

console.log(sentence);

// TASK 2

console.log("Task 2");

var sentenceTwo = "Lorem ipsum dolor sit amet";

function check (checkString) {
  if (checkString.includes("sit")) {
    console.log("The word *sit* exist in a string");
  } 
  else{
    console.log("The word *sit* exist in a string")
  }
}

check(sentenceTwo);

// TASK 3

console.log("Task 3");

var sentenceThree = "Lorem ipsum dolor sit amet";

function findindex (check) {
  return check.length - 1;
}

sentenceThree = findindex(sentenceThree);

console.log(sentenceThree);

// TASK 4

console.log("Task 4");

var sentenceFour = "Lorem ipsum dolor sit amet";

function cutString (cutSentence) {
  return cutSentence.split(" ",3) 
}

sentenceFour = cutString(sentenceFour);

console.log(sentenceFour);


// TASK 5

console.log("Task 5");

var sentenceFive = "Piter is an actor.";

function replaceString(str){
  str = str.split("");
  str[3] = "o";
  str[15] = "e";
  return str = str.join("");
}

sentenceFive = replaceString(sentenceFive);

console.log(sentenceFive);

// TASK 6

console.log("Task 6");

var someData = [34, 23, 14, 56, 23, 44, 65];
var number = 56;

function newData(arr, num) {
  arr = arr.filter(function(data){
    return data !== num;
  });
  return arr;
}

someData = newData(someData,number);
console.log(someData);

// TASK 7

console.log("Task 7");

var someNewData = [34, 23, 14, 56, 23, 44, 65];

function newArr(data){
  var firstArr = data.slice(1,4)
  var secondArr = data.splice(4,6)
  var newArray = [...firstArr, ...secondArr.reverse()];
  return newArray;
}

someNewData = newArr(someNewData)

console.log(someNewData);


// TASK 8

console.log("Task 8");

var data = [334, 233, 212, 199, 154, 122];

function subtraction(arr) {

  var newArray = arr.map(function(element){

    if (arr.indexOf(element) !== 0) {

      return element - arr[arr.indexOf(element)-1];

    } else return element;
  });

  return newArray;
}

var newArr = subtraction(data);

console.log(newArr);

// Other way

//var arr = [];
// function reduce(reducedArr){
//  for (var i = 0; i < reducedArr.length; i++) {
//    arr[i] = reducedArr[i] - reducedArr[i - 1]
//  }
//  return arr;
// }
// reduce(data);
// console.log(arr);

// TASK 9

console.log("Task 9");

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]

var averageGrade = 8.5;

function bestOf(arr, avg) {

  var newArray = arr.filter(function(element){

    return element.avgGrade > avg;

  });

  newArray.forEach(function(element) {

    element.avgGrade = element.avgGrade.toFixed(2);

  });

  return newArray;
}

var goodStudents = bestOf(students, averageGrade);

console.log(goodStudents);


//Other way

// var someArr = [];

// function grade (student, grade) {
//  for (var i = 0; i < student.length; i++) {
//    if (student[i].avgGrade > grade) {
//      someArr[i] = student[i].name + "`s" + " average grade is: " +  student[i].avgGrade.toFixed(2);
//    } 
//    else
//    {
//      console.log("There are no students with avg grade above 8.5");
//    }

//  }
//  return someArr;
// }

// grade(students, averageGrade);
// console.log(someArr);