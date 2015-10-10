var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");
context.fillStyle = "#FF0000";
context.fillRect(0, 0, 150, 75);
alert("What is happening"); 

// When the window is resized we want to
//resize the canvas
$(document).ready(function() {
    $(window).resize(function() {
	alert("The window is resizing"); 
	var data = canvas.toDataURL();

	canvas.width *= 0.5;
	canvas.height *= 0.5;

	var img = new Image();

	img.onload=function(){
	    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.wdith, canvas.height);};

	img.src = data;
    });
});
