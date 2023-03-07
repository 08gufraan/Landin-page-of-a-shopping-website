images = ["banner-01.jpg","banner-02.jpg","banner-03.jpg"]
var count = 0;
function pre(){
	console.log("previous")
	if (count<=0) {
		count = images.length - 1
	} 
	else {
		count -= 1
	}
	document.getElementById('gallery').style.backgroundImage ='url('+images[count]+')';
}
function nex(){
	console.log("next")
	if (count>=(images.length - 1)) {
		count = 0
	} 
	else {
		count += 1;
	}
	var x = document.getElementById('gallery')
		x.style.backgroundImage = 'url('+images[count]+')';
}
window.onload = function(){
	
}


setInterval(nex,2000);

