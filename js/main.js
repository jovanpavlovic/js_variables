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

console.log("TASK 5")

function getNumber(number_one, number_two){

 var newArr = [];
 for (var i = 0; i < number_one.length; i++) {
   newArr[i] = [...number_one, 6];
 }
 return newArr;
}


var printNums = function(nums, singlenum) {

  var biggestnum = getNumber(nums);
 for (var i = 0; i < nums.length; i++) {
   if (nums[i]>singlenum) {
     console.log(nums[i]);
   }
 }
}

printNums([3, 5, 76 ,1, 2], 6);