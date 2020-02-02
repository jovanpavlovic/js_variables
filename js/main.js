// var opt = document.getElementById("dogBreed");
// var sel = opt.options[opt.selectedIndex].value;

// function getData() {
//     var newRequest = new XMLHttpRequest();

//     newRequest.open("GET","https://dog.ceo/api/breeds/image/random");

//     newRequest.onload = function() {
//         console.log(newRequest);
//     }

//     newRequest.send();
//  }  

//  getData();

var select;

var fetchDoggoBreeds = async () => {

  var data = await fetch('https://api.thedogapi.com/v1/breeds').then(data => data.json());
  dogSelect(data);
}

var dogSelect = function (breeds) {
  select = document.querySelector('.breed');
  var breedOpt = breeds.map(function (breed) {
    var option = document.createElement('option');
    option.text = breed.name;
    option.value = breed.id;
    return option;
  })

  breedOpt.forEach( function (breedOption) {
    select.appendChild(breedOption);
  })
}

var image = function (imageUrl) {
  document.querySelector('#dogImg').setAttribute('src', imageUrl);

}

var getDogByBreed = async function (breedId) {
  var [data] = await fetch('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + breedId).then((data => data.json()));
  var {url: imageUrl, breeds} = data;
  console.log(breeds[0]);
  image(imageUrl);
}

var changeDog = function() {
  getDogByBreed(event.target.value);
}

fetchDoggoBreeds();