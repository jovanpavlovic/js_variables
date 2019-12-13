//TASK 1

console.log("TASK 1")

var person = {
  name: "Mike",
  age: 28,
  married: true
}

function changeAge(personData) {
  personData.age = 34;
  delete personData.married;
}

changeAge(person);

console.log(person);

//TASK 2

console.log("TASK 2")

var person_two = {
  name: "Jack",
  age: 32,
  married: true
  //children:[]  //uncomment for first solution
}

//First solution

function check(object) {

  if ("children" in object){
    object.children = [{
      name: "Anna",
      age: 12,
      gender: "Female"
    },

    {
      name: "Marta",
      age: 7,
      gender: "Female"
    }];
  }

  else {
    object.children = [{
      name: "Peter",
      age: 3,
      gender: "Male"
    },

    {
      name: "Mike",
      age: 9,
      gender: "Male"
    }];
  }

}

//Second solution
//  function check(object) {
//   if (object!=children) {
//     object.children = [{
//       childName: "Peter",
//       childAge: 3,
//       childGender: "Male"
//     },

//     {
//       childName: "Anna",
//       childAge: 12,
//       childGender: "Female"
//     }];
    
//   }
// }

check(person_two);
console.log(person_two);

// //TASK 3

console.log("TASK 3")

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   }
];

function checked(object){
  for (var i = 0; i < object.length; i++) {
    if (object[i].passed) 
    {
      console.log(object[i].name + " passed the exam.");
    } 
    else 
    {
      console.log(object[i].name + " didnt pass the exam.");
    }
  }
}

checked(students);

// //TASK 4

console.log("TASK 4")

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function repack(object){

  var names = [];
  var ages = [];
  var passed = [];

  for (var i = 0; i < object.length; i++) {

    names[i] = students[i].name;
    ages[i] = students[i].age;
    passed[i] = students[i].passed;
  }

  console.log(names);
  console.log(ages);
  console.log(passed);
}

repack(students);

// //TASK 5

console.log("TASK 5")

var person = {
  name : "Jack",
  age : 32,
  married: true
}

var otherObject = Object.create(person);

console.log(otherObject.age);

//TASK 6

console.log("TASK 6")

var person = {
  name: "Mike",
  age: 28,
  married: true,

    printData: function(){
    console.log("Name is " + this.name)
    console.log("Age is " + this.age)
  }
};

person.printData();

// //TASK 7

console.log("TASK 7")

var person = {};

person.printData = function(name, age, married){   
  this.name = name;
  this.age = age;
  this.married = married;   
};

person.printData("Peter", 25, true);

console.log(person);