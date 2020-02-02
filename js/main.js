var list = document.querySelector('#movie-list ul');
var forms = document.forms;

// hide movies - show series only...show items with class action
var filterSeries = document.querySelectorAll(".action");
var seriesOnly = document.querySelector('#series');

seriesOnly.addEventListener('change', function(e){
filterSeries.forEach(function(serie){
  if(seriesOnly.checked){
    serie.style.display = "none";
  } else {
    serie.style.display = "flex";
    serie.style.justifyContent = "space-between";
    }
  });
});

// del
list.addEventListener('click', function (e) { //when soimeone click ul we need to check where the user clicked, well do that with target.className
  if(e.target.className == 'del'){
    var li = e.target.parentElement;         //parent element of the button that we clicked
   list.removeChild(li);           // grab Node above, instead of li.parentNode we can use var list
  }
});

  // add
  var addForm = forms['add-movie'];
  addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create
  var value = addForm.querySelector('input[type="text"]').value;
  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var delBtn = document.createElement('span');

  movieName.textContent = value;
  delBtn.textContent = 'Delete';

  movieName.classList.add('name');
  delBtn.classList.add('del');

  li.appendChild(movieName);
  li.appendChild(delBtn);
  list.appendChild(li);
});



var search = document.forms['search-movies'].querySelector('input'); //refenrece to the search input

search.addEventListener('keyup', function(e) {                       //keyp event is every letter that we type in, we we want to compare it to values that we have
  var term = e.target.value.toLowerCase();                           //we want to grab value of input field
  var movies = list.getElementsByTagName('li');                      
  Array.from(movies).forEach(function (movie) {                      //movies return htmlcollectio so we need to make an array from it so we can cycle through them
    var title = movie.firstElementChild.textContent;                 //we want to grab spans text content
    if(title.toLowerCase().indexOf(e.target.value) != -1){           // we get index of term(position in a string). For instantce when we type or postion of a string in "Worlds apart" will be 1 if we type something that doiesnt existiindexOf(e.target.value) will return -1
      movie.style.display = 'inital';
    } else {
      movie.style.display = 'none';
    }
  });
});


// function validateForm() {
//   var x = document.forms["y"]["y"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }


//panel

// var flip = document.querySelectorAll(".flip");
// var panel = document.querySelectorAll('.panel');

//  for(var i = 0; i < flip.length; i++) {
//     var panel = document.querySelectorAll('.panel');
//        flip[i].addEventListener("click", function(e){
//   });
//  }