var canvas;
var x, y
function doFirst(){
	mypic = document.getElementById('led');
	mypic.addEventListener("dragstart",startDrag,false);
	 component = document.getElementById('breadboard');
	 component.addEventListener("dragenter",function(e){e.preventDefault();},false);
	 component.addEventListener("dragover",function(e){e.preventDefault();},false);
	 component.addEventListener("drop",dropped,false);
 }
 function startDrag(e){
 }
 function dropped(e) {
	 e.preventDefault();
	 canvas = document.getElementById('myCanvas');
	 canvas.style.display = "none";

	 var hole2 = document.elementFromPoint(e.clientX + 16, e.clientY + 18);
	 if (hole2.className == "centerRect") {
		 hole2 = hole2.parentNode;
	 }
	 if (hole2.className == "hole") {
		 var hole1 = hole2.previousSibling.previousSibling;
	 } else if (hole2.className == "mhole") {
		 if (hole2.id.charAt(6) == "_") {
			 prevId = Number(hole2.id.charAt(5)) - 1;
			 if (prevId == 0) {
				 var hole1 = null;
			 } else {
				 prevId = hole2.id.replace(hole2.id.charAt(5), String(prevId));
				 var hole1 = document.getElementById(prevId);
			 }
		 } else {
			 prevId = Number(hole2.id.substring(6, 7)) - 1;
			 console.log("prevId:");
			 console.log(typeof(prevId));
			 console.log(prevId);
			 if(prevId<0){
				 prevId = hole2.id.substring(0, 5)+"9"+hole2.id.substring(7);
			 }else if(prevId==0){
				 prevId = hole2.id.substring(0, 5)+"10"+hole2.id.substring(7);
			 }
			 else{
				 prevId = hole2.id.replace(hole2.id.substring(6, 7), String(prevId));
			 }
			 var hole1 = document.getElementById(prevId);


		 }
	 }

	 if (hole1 != null) {
		 if (hole2.className == "mhole" || hole2.className == "hole") {
			 if (hole1.className == "mhole" || hole1.className == "hole") {
				 x = hole2.offsetLeft + (hole2.offsetWidth / 10);
				 y = hole2.offsetTop + (hole2.offsetHeight / 10);
				 canvas.style.display = "";
				 var ctx = canvas.getContext("2d");
				 var catImage = new Image();
				 catImage.src = "images/led.png";
				 ctx.drawImage(catImage, x - 34, y - 36, 42, 36);
			 } else {
				 canvas.style.display = "";
			 }
		 } else {
			 canvas.style.display = "";
		 }
	 } else {
		 canvas.style.display = "";
	 }
	 console.log("hole1:");
	 console.log(hole1);
	 console.log("hole2:");
	 console.log(hole2);
 }

window.addEventListener("load", doFirst, false);