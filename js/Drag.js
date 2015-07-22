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
	//e.dataTransfer.setData('Text',code);
 }
 function dropped(e){
	 e.preventDefault();
	 canvas = document.getElementById('myCanvas');
	 canvas.style.display = "none";
	 var hole = document.elementFromPoint(e.clientX+15, e.clientY+18);
	 console.log(hole);
	 //hole.style.position ='absolute';
	 if (hole.className == "mhole" || hole.className == "hole") {
		 x = hole.offsetLeft + (hole.offsetWidth / 10);
		 y = hole.offsetTop + (hole.offsetHeight / 10);
		 //hole.innerHTML = e.dataTransfer.getData('Text');
	 }else if(hole.className == "centerRect") {
		 x = hole.offsetLeft - hole.offsetWidth;
		 y = hole.offsetTop - hole.offsetHeight;
		 //hole.innerHTML = e.dataTransfer.getData('Text');
	 }
	 else{
		 return;
	 }
	 canvas.style.display = "";
	 var ctx = canvas.getContext("2d");
	 var catImage = new Image();
	 catImage.src = "images/led.png";
	 ctx.drawImage(catImage, x-34 , y-36,40,36);
 }
 window.addEventListener("load",doFirst,false);