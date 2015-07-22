var tmp;
function doFirst(){
	mypic = document.getElementById('led');
	mypic.addEventListener("dragstart",startDrag,false);
	 component = document.getElementById('breadboard');
	 component.addEventListener("dragenter",function(e){e.preventDefault();},false);
	 component.addEventListener("dragover",function(e){e.preventDefault();},false);
	 component.addEventListener("drop",dropped,false);
 }
 function startDrag(e){
	var code = '<img id="led" src="images/led.png" width="36px">';
	e.dataTransfer.setData('Text',code);
 }
 function dropped(e){
	 e.preventDefault();
	 tmp = document.getElementById('myCanvas');
	 tmp.style.display = "none";
	 var hole = document.elementFromPoint(e.clientX, e.clientY);
	 console.log(hole);
	 hole.style.position ='absolute';
	 hole.style.top = e.clientY + document.body.scrollTop;
	 hole.style.left = e.clientX + document.body.scrollLeft;
	 hole.innerHTML = e.dataTransfer.getData('Text');
	 tmp.style.display = "";
 }
 window.addEventListener("load",doFirst,false);