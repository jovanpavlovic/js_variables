//TASK 1

console.log("TASK 1")

var reverse = function(data) {
var newarr = [];

  for (var i = 0; i < data.length; i++) {
    newarr[i] = data[data.length - 1 - i];
  }
  console.log(newarr);
};

reverse([56, "John", "Mark", 32]);

//TASK 2

console.log("TASK 2")

var type = function(datatype) {
  console.log("This element is the typeof: " + typeof datatype);
};

type("Mark");
type(true);
type(89);

//TASK 3

console.log("TASK 3")

var longName = function (name_arr){

  var j = 0;
  var longestName;

  for (var i = 0; i < name_arr.length; i++){
      if (name_arr[i].length > j){
        j = name_arr[i].length;
        longestName= name_arr[i];
      }

  }
  console.log(longestName);
}

longName(["Alexander", "John", "Mark", "Peter"]);


//TASK 4

console.log("TASK 4")

function greatestLowest(arr_num)  {  
for (var i = 1; i < arr_num.length; i++)
    for (var j = 0; j < i; j++)
        if (arr_num[i] < arr_num[j]) {
          var s = arr_num[i];
          arr_num[i] = arr_num[j];
          arr_num[j] = s;
        }

  console.log(arr_num[1]);
  console.log(arr_num[arr_num.length - 2]);
} 

  
greatestLowest([6.7, -1, 8, 0, 3, 4, 5, 2]);  


//TASK 5

//Using spread operator - Excercise 

// console.log("TASK 5 - a")

// function getNumber(number_one, number_two){

//  var newArr = [];
//  for (var i = 0; i < number_one.length; i++) {
//    newArr[i] = [...number_one, 6];
//  }
//  return newArr;
// }


// var printNums = function(nums, singlenum) {

//   var biggestnum = getNumber(nums);
//  for (var i = 0; i < nums.length; i++) {
//    if (nums[i]>singlenum) {
//      console.log(nums[i]);
//    }
//  }
// }

// printNums([3, 5, 76 ,1, 2], 6);

console.log("TASK 5 - b")

function getNumber(number_one, number_two){

 var newArr = [];
 for (var i = 0; i < number_one.length; i++) {
  if (number_one[i] > number_two) {
       newArr[newArr.length] = number_one[i];
    }
  }
  return newArr;
}

var printNums = function(nums, singleNum) {
  var biggerNum = getNumber(nums, singleNum)
  console.log(biggerNum);
}
printNums([3, 76 ,67, 2], 6);

// //TASK 6

console.log("TASK 6");

function largestNum(arr) {

  var highestNumber = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > highestNumber) {
      highestNumber = arr[i];
    }
  }

  return highestNumber;
}

function lowestNum(arrTwo) {

  var lowestNumber = arrTwo[0];

  for (var i = 1; i < arrTwo.length; i++) {
    if (arrTwo[i] < lowestNumber) {
      lowestNumber = arrTwo[i];
    }
  }

  return lowestNumber;
}

function multiply(functionLargest, functionLowest) {

  someArr = [0,1,2,3,4,5,-1];

  var highestNumber = functionLargest(someArr);
  var lowestNumber = functionLowest(someArr);

  console.log("Lowest number * Highest number from this array: (" + someArr +  ") = " + highestNumber * lowestNumber);
}

multiply(largestNum, lowestNum);

//TASK 7

console.log("TASK 7");

var z = [15,35,46,23,15,17,23,24,35,12,72,64,35,22,64];

var deleteLastOne = function(arr){
  arr.length = arr.length - 1;
}

var newArr = function(arr, arrTwo){
  for (var i = 0; i < arr.length; i++) { 
    arrTwo[i] = arr[i];
  }
}

var uniqueValues = function(arr, arrThree){ 
  var p = 0;          
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      arrThree[p] = arr[i];
      p++;
    }
  }
}

function sortByAscending(arr)  {  
for (var i = 1; i < arr.length; i++)
    for (var j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
          var s = arr[i];
          arr[i] = arr[j];
          arr[j] = s;
        }
}

var uniqueNumbers = function(arr, data){
    if (arr.length > 1) {
      var y = [];
      var x = [];

      newArr(z, x);
      sortByAscending(x);
      uniqueValues(x, y);
      data(y);
      console.log(y);
  } 
}

uniqueNumbers(z, deleteLastOne);
