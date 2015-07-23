var canvas;
var log;
var imageX, imageY;
var targetId;
var imageArray = new Array;
var imagexyArray = new Array;
var imageindexPoint = 0;

function doFirst(){
	var led_red_off = document.getElementById('led_red_off');
	var led_yellow_off = document.getElementById('led_yellow_off');
	var led_green_off = document.getElementById('led_green_off');
	var R_100 = document.getElementById('R_100');
	var R_220 = document.getElementById('R_220');
	var R_330 = document.getElementById('R_330');
	var R_1000 = document.getElementById('R_1000');
	var R_3300 = document.getElementById('R_3300');
	var R_4700 = document.getElementById('R_4700');
	var R_10000 = document.getElementById('R_10000');
	var R_100000 = document.getElementById('R_100000');

	led_red_off.addEventListener("dragstart",startDrag,false);
	led_yellow_off.addEventListener("dragstart",startDrag,false);
	led_green_off.addEventListener("dragstart",startDrag,false);
	R_100.addEventListener("dragstart",startDrag,false);
	R_220.addEventListener("dragstart",startDrag,false);
	R_330.addEventListener("dragstart",startDrag,false);
	R_1000.addEventListener("dragstart",startDrag,false);
	R_3300.addEventListener("dragstart",startDrag,false);
	R_4700.addEventListener("dragstart",startDrag,false);
	R_10000.addEventListener("dragstart",startDrag,false);
	R_100000.addEventListener("dragstart",startDrag,false);


	 var component = document.getElementById('breadboard');
	 component.addEventListener("dragenter",function(e){e.preventDefault();},false);
	 component.addEventListener("dragover",function(e){e.preventDefault();},false);
	 component.addEventListener("drop",dropped,false);

 }
 function getImageId(e){
	// console.log(e.target.nodeName);
 }

 function startDrag(e){
	 targetId =  e.target.id;
	 console.log(targetId);
	 var componentId = document.getElementById("componentId");
	 var resistorValue  = document.getElementById("resistorValue");
	 switch(targetId){
		 case 'led_red_off':
			 componentId.innerHTML = led_red_off.id;
			 resistorValue.innerHTML = led_red_off.resistorValue;
		 	break;
		 case 'led_yellow_off':
			 componentId.innerHTML = led_yellow_off.id;
			 resistorValue.innerHTML = led_yellow_off.resistorValue;
			 break;
		 case 'led_green_off':
			 componentId.innerHTML = led_green_off.id;
			 resistorValue.innerHTML = led_green_off.resistorValue;
			 break;
		 case 'R_100':
			 componentId.innerHTML = R_100.id;
			 resistorValue.innerHTML = R_100.resistorValue;
			 break;
		 case 'R_220':
			 componentId.innerHTML = R_220.id;
			 resistorValue.innerHTML = R_220.resistorValue;
			 break;
		 case 'R_330':
		 componentId.innerHTML = R_330.id;
		 resistorValue.innerHTML = R_330.resistorValue;
		 break;
		 case 'R_1000':
			 componentId.innerHTML = R_1000.id;
			 resistorValue.innerHTML = R_1000.resistorValue;
			 break;
		 case 'R_3300':
			 componentId.innerHTML = R_3300.id;
			 resistorValue.innerHTML = R_3300.resistorValue;
			 break;
		 case 'R_4700':
			 componentId.innerHTML = R_4700.id;
			 resistorValue.innerHTML = R_4700.resistorValue;
			 break;
		 case 'R_10000':
			 componentId.innerHTML = R_10000.id;
			 resistorValue.innerHTML = R_10000.resistorValue;
			 break;
		 case 'R_100000':
			 componentId.innerHTML = R_100000.id;
			 resistorValue.innerHTML = R_100000.resistorValue;
			 break;
	 }
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
			 if(prevId<0){
				 switch(Number(hole2.id.charAt(5))){
					 case 1:
						 prevId = hole2.id.substring(0, 5)+"9"+hole2.id.substring(7);
						 break;
					 case 2:
						 prevId = hole2.id.substring(0, 5)+"19"+hole2.id.substring(7);
						 break;
					 case 3:
						 prevId = hole2.id.substring(0, 5)+"29"+hole2.id.substring(7);
						 break;
				 }
			 }else if(prevId==0){
				 switch(Number(hole2.id.charAt(5))){
					 case 1:
						 prevId = hole2.id.substring(0, 5)+"10"+hole2.id.substring(7);
						 break;
					 case 2:
						 prevId = hole2.id.substring(0, 5)+"20"+hole2.id.substring(7);
						 break;
					 case 3:
						 prevId = hole2.id.substring(0, 5)+"30"+hole2.id.substring(7);
						 break;
				 }
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
				 imageX = hole2.offsetLeft + (hole2.offsetWidth / 10) - 34;
				 imageY = hole2.offsetTop + (hole2.offsetHeight / 10) - 36;
				 canvas.style.display = "";
				 var ctx = canvas.getContext("2d");
				 var catImage = new Image();

				 catImage.src = "images/components/"+targetId+".png"


				 ctx.drawImage(catImage, imageX, imageY, 42, 36);

				 imageArray[imageindexPoint] = new Image();
				 imageArray[imageindexPoint] = catImage.src;
				 imagexyArray[imageindexPoint] = new Array(2);
				 imagexyArray[imageindexPoint][0] = imageX;
				 imagexyArray[imageindexPoint][1] = imageY;
				 imageindexPoint += 1;
				 latelyWorkArray[latelyWorkPoint] = 1;
				 latelyWorkPoint++;

			 } else {
				 canvas.style.display = "";
			 }
		 } else {
			 canvas.style.display = "";
		 }
	 } else {
		 canvas.style.display = "";
	 }

	 /*var logcat = document.createElement('logcat');
	  var log = document.getElementById('log');
	  logcat.("hi");
	  logcat.width = 'inherit';
	  logcat.height = 20;
	  logcat.style.display='block';
	  log.appendChild(logcat);*/
	 console.log("hole1:");
	 console.log(hole1);
	 console.log("hole2:");
	 console.log(hole2);
	 console.log(hole0_0.id);
 }

window.addEventListener("load", doFirst, false);