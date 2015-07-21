 function doFirst(){
	mypic = document.getElementById('led');
	mypic.addEventListener("dragstart",startDrag,false);
	 component = document.getElementById('hole0_0');
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
	 component.innerHTML = e.dataTransfer.getData('Text');
 }
 window.addEventListener("load",doFirst,false);

 $(function() {
	 $( "#selectable" ).selectable();
 });

 $(function() {
	 $( "#draggable, #draggable-nonvalid" ).draggable();
	 $( "#droppable" ).droppable({
		 accept: "#draggable",
		 activeClass: "ui-state-hover",
		 hoverClass: "ui-state-active",
		 drop: function( event, ui ) {
			 $( this )
				 .addClass( "ui-state-highlight" )
				 .find( "p" )
				 .html( "Dropped!" );
		 }
	 });
 });