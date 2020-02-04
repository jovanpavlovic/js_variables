
var searchButton = document.querySelector(".search button");
var key = "AIzaSyDL91x1vwiL9_NuCW7vsMPJaZk5ArMQiAQ";
var videoList = document.querySelector(".video-list");
var videoPreview = document.querySelector(".video-preview");

function onSearch() {
	var searchFiled = document.querySelector(".search input");

	searchFiled.value.trim() && getVideos(searchFiled.value);
	searchFiled.value = '';
}

function getVideos(searchValue) {
	var request = new XMLHttpRequest();

	console.log(searchValue);

	request.open("GET", 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchValue +'&key=' + key);

	request.onload = function(){
		console.log(request.responseText);
		listVideos(JSON.parse(request.responseText).items); 
	}

	request.send();
}

function getRelatedVideos(videoId) {
	var request = new XMLHttpRequest();

	request.open("GET", 'https://www.googleapis.com/youtube/v3/search?part=snippet&\
	maxResults=6&type=video&relatedToVideoId=' + videoId +'&key=' + key);

	request.onload = function(){
		listVideos(JSON.parse(request.responseText).items, "related");
	}

	request.send();
}



function listVideos(videos) {

	videoList.innerHTML = "";

	videos.forEach(function(video) {
		addVideo(video);
	})
	
}


function addVideo(videoData) {
	var videoElement = document.createElement("div");
	var img = '<img src="' + videoData.snippet.thumbnails.medium.url +'">';
	var title = '<h3>' + videoData.snippet.title + '</h3>';
	var desc ='<div>' + videoData.snippet.description + '</div>';
	

	videoElement.innerHTML ='<div id="img-wrap">'+  img + '</div>' + '<section>' + title + desc + '</section>';
	videoList.appendChild(videoElement);

	console.log(videoElement);

	videoElement.querySelectorAll("h3, img").forEach(function(element) {
		element.addEventListener("click", function() {
			openVideo(videoData.id.videoId)
		})
	})

}

function openVideo(id) {
	videoPreview.innerHTML = '<iframe width="100%" height="500" src="https://www.youtube.com/embed/'+ id +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	videoPreview.style.margin = "20px";
	videoPreview.style.borderBottom = "3px solid #282828";

	var closePreview = document.createElement("button")
	closePreview.textContent = "Close perview";

	videoPreview.appendChild(closePreview);

	closePreview.addEventListener("click", function(){
		videoPreview.style.display = "none";
	})

}

// init

searchButton.addEventListener("click", onSearch)