// TASK 1

console.log('TASK 1');

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i<dataOld.length; i++) {
  dataNew[i] = dataOld[i];
}

console.log(dataNew);

// TASK 2

console.log('TASK 2');

for (var i = dataOld.length -1 ; i >= 0; i--) {
  dataNew[dataOld.length -1 - i] = dataOld[i];
}

console.log(dataNew);

// TASK 3:

console.log('TASK 3');

var dataNew = [12, "Jack"];

for (var i = 2; i < 6; i++) {
  dataNew[i] = dataOld[i - 2];
}
console.log(dataNew);

// TASK 4

console.log('TASK 4');

//1st example Concat

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = a.concat(b);

console.log(c);

//2nd example Spread

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [...a , ...b];

console.log(c);

//3rd example For

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {
  c[i] = a[i];
}

for (var i = a.length; i < a.length + b.length; i++) {
  // na petu poziciju stavi 0 od b
  c[i] = b[i - a.length];
}
console.log(c);

// TASK 5:

console.log('TASK 5');

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

for (var i = 0, j = 0; i+j < 7;) {
    if(i<a.length) {
        c[i+j] = a[i++];
    }
    if(j<b.length) {
        c[i+j] = b[j++];
    }
}

console.log(c);

// TASK 6

console.log('TASK 6');

var star = "";

for (var i = 6; i >= 1; i--){
  star += "*";
 console.log(star);
}


// TASK 7:

console.log('TASK 7');

var x = 7;
var y = 11;
var p = x - 1;
var o = y - 1;
var z = "";

for (var i = 0; i < x; i++) {
  for (var j = 0; j < y; j++) {
    if (j > 0 && j < o && i > 0 && i < p) {
      z += " ";
    } else { 
      z += "*";
    }
  }
  z += "\n";
}

console.log(z);