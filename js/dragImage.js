var canvas;
var log;
var imageX, imageY;
var targetId;
var imageArray = [];
var imagexyArray = [];
var imageindexPoint = 0;
var selVoltageValue =0;
var timer;
var undefinedFlag = false;
window.addEventListener("load", doFirst, false);
function doFirst(){
	var led_red_off = document.getElementById('led_red_off');
	var led_yellow_off = document.getElementById('led_yellow_off');
	var led_green_off = document.getElementById('led_green_off');
	var R_100 = document.getElementById('R_100');
	var R_200 = document.getElementById('R_200');
	var R_220 = document.getElementById('R_220');
	var R_300 = document.getElementById('R_300');
	var R_330 = document.getElementById('R_330');
	var R_470 = document.getElementById('R_470');
	var R_560 = document.getElementById('R_560');
	var R_1000 = document.getElementById('R_1000');
	var R_2000 = document.getElementById('R_2000');
	var R_3000 = document.getElementById('R_3000');
	var R_3300 = document.getElementById('R_3300');
	var R_4700 = document.getElementById('R_4700');
	var R_10000 = document.getElementById('R_10000');
	var R_100000 = document.getElementById('R_100000');
	var Current_Left = document.getElementById('Current_Left');
	var Current_Right = document.getElementById('Current_Right');
	var Voltage_Left = document.getElementById('Voltage_Left');
	var Voltage_Right = document.getElementById('Voltage_Right');

	led_red_off.addEventListener("dragstart",startDrag,false);
	led_yellow_off.addEventListener("dragstart",startDrag,false);
	led_green_off.addEventListener("dragstart",startDrag,false);
	R_100.addEventListener("dragstart",startDrag,false);
	R_200.addEventListener("dragstart",startDrag,false);
	R_220.addEventListener("dragstart",startDrag,false);
	R_300.addEventListener("dragstart",startDrag,false);
	R_330.addEventListener("dragstart",startDrag,false);
	R_470.addEventListener("dragstart",startDrag,false);
	R_560.addEventListener("dragstart",startDrag,false);
	R_1000.addEventListener("dragstart",startDrag,false);
	R_2000.addEventListener("dragstart",startDrag,false);
	R_3000.addEventListener("dragstart",startDrag,false);
	R_3300.addEventListener("dragstart",startDrag,false);
	R_4700.addEventListener("dragstart",startDrag,false);
	R_10000.addEventListener("dragstart",startDrag,false);
	R_100000.addEventListener("dragstart",startDrag,false);
	Current_Left.addEventListener("dragstart",startDrag,false);
	Current_Right.addEventListener("dragstart",startDrag,false);
	Voltage_Left.addEventListener("dragstart",startDrag,false);
	Voltage_Right.addEventListener("dragstart",startDrag,false);

	 var component = document.getElementById('breadboard');
	 component.addEventListener("dragenter",function(e){e.preventDefault();},false);
	 component.addEventListener("dragover",function(e){e.preventDefault();},false);
	 component.addEventListener("drop",dropped,false);

 }

 function startDrag(e){
	 targetId =  e.target.id;
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
		 case 'R_200':
			 componentId.innerHTML = R_200.id;
			 resistorValue.innerHTML = R_200.resistorValue;
			 break;
		 case 'R_220':
			 componentId.innerHTML = R_220.id;
			 resistorValue.innerHTML = R_220.resistorValue;
			 break;
		 case 'R_300':
			 componentId.innerHTML = R_300.id;
			 resistorValue.innerHTML = R_300.resistorValue;
			 break;
		 case 'R_330':
		 	componentId.innerHTML = R_330.id;
			resistorValue.innerHTML = R_330.resistorValue;
		 break;
		 case 'R_470':
			 componentId.innerHTML = R_470.id;
			 resistorValue.innerHTML = R_470.resistorValue;
			 break;
		 case 'R_560':
			 componentId.innerHTML = R_560.id;
			 resistorValue.innerHTML = R_560.resistorValue;
			 break;
		 case 'R_1000':
			 componentId.innerHTML = R_1000.id;
			 resistorValue.innerHTML = R_1000.resistorValue;
			 break;
		 case 'R_2000':
			 componentId.innerHTML = R_2000.id;
			 resistorValue.innerHTML = R_2000.resistorValue;
			 break;
		 case 'R_3000':
			 componentId.innerHTML = R_3000.id;
			 resistorValue.innerHTML = R_3000.resistorValue;
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
		 case 'Current_Left':
			 componentId.innerHTML = Current_Left.id;
			 resistorValue.innerHTML = Current_Left.resistorValue;
			 break;
		 case 'Current_Right':
			 componentId.innerHTML = Current_Right.id;
			 resistorValue.innerHTML = Current_Right.resistorValue;
			 break;
		 case 'Voltage_Left':
			 componentId.innerHTML = Voltage_Left.id;
			 resistorValue.innerHTML = Voltage_Left.resistorValue;
			 break;
		 case 'Voltage_Right':
			 componentId.innerHTML = Voltage_Right.id;
			 resistorValue.innerHTML = Voltage_Right.resistorValue;
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
	 }e;
	 if (hole1 != undefined) {
		 if (hole2.className == "mhole" || hole2.className == "hole") {
			 if (hole1.className == "mhole" || hole1.className == "hole") {
				 imageX = hole2.offsetLeft + (hole2.offsetWidth / 10) - 34;
				 imageY = hole2.offsetTop + (hole2.offsetHeight / 10) - 36;
				 canvas.style.display = "";
				 var ctx = canvas.getContext("2d");
				 var catImage = new Image();

				 catImage.src = "images/components/"+targetId+".png";


				 ctx.drawImage(catImage, imageX, imageY, 42, 36);

				 imageArray[imageindexPoint] = new Image();
				 imageArray[imageindexPoint] = catImage.src;
				 imagexyArray[imageindexPoint] = new Array(2);
				 imagexyArray[imageindexPoint][0] = imageX;
				 imagexyArray[imageindexPoint][1] = imageY;
				 imageindexPoint += 1;
				 latelyWorkArray[latelyWorkPoint] = 1;
				 latelyWorkPoint += 1;

			 } else {
				 canvas.style.display = "";
			 }
		 } else {
			 canvas.style.display = "";
		 }
		 printTime();
		 if (targetId.charAt(0) == "l") {
			 targetId = targetId.slice(0, -4).toUpperCase();
			 $("#log").append("Component Name: '" + targetId + "', ");
		 } else {
			 $("#log").append("Component Name: '" + targetId + "', ");
		 }
		 $("#log").append("1st hole: '" + hole1.id + "', ");
		 $("#log").append("2nd Hole: '" + hole2.id + "' ");
		 $("#log").append(document.createElement('br'));
		 log.scrollTop = log.scrollHeight;
	 } else {
		 canvas.style.display = "";
	 }

 }
function setVoltage() {
	selVoltageValue = $('#selVoltage').val();
	topplusline.V = bottomplusline.V = selVoltageValue;
	printTime();
	$("#log").append("Power Supply Voltage Setting Complete: "+ String(selVoltageValue)+"V");
	$("#log").append(document.createElement('br'));
	log.scrollTop = log.scrollHeight;
	timer = setInterval(checkCirCuit, 2000);
}
var item;
function checkCirCuit(){

}

function printTime() {
	var now = new Date();
	var nowTime = now.getFullYear() + "." + (now.getMonth()+1) + "-" + now.getDate() + " "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " / ";
	$("#log").append(nowTime);
}

window.onload = function() {
	var now = new Date();
	var nowTime = now.getFullYear() + "." + (now.getMonth()+1) + "-" + now.getDate() + " "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " / ";
	$("#log").append(nowTime);
	$("#log").append("onload : Bread Board Simulation Start");
	$("#log").append(document.createElement('br'));
};