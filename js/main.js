
var myImage = document.getElementById("mainImage");
var arr = ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg"]
var x = 1;

function slider() {
	myImage.setAttribute("src",arr[x]);
	x++;
	if (x > arr.length - 1) {x = 0}
}

setInterval(slider, 3000);

//WAY TWO

var image = 1;

    document.getElementById(0).src = document.getElementById(image).src;
    document.getElementById(image).className = "thumbnail active";
 
    function preview(img) {
        document.getElementById(image).className = "thumbnail";
        img.className = "thumbnail active";
        document.getElementById(0).src = img.src;
        image = img.id
    }