var mousePressed = false;
var lastX, lastY;
var ctx;
var startCenterX, startCenterY, endCenterX, endCenterY;
var colorArray = [];
var xyArray = [];
var indexPoint = 0;
var latelyWorkArray = [];
var latelyWorkPoint = 0;
var i;
var startHole, endHole;
var parentArray = [];
function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");
    log = document.getElementById('log');
    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        findStartHole(e.clientX, e.clientY);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
        findEndHole(e.clientX, e.clientY);
    });
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x;
    lastY = y;

}
function cUndo() {
    if(latelyWorkArray[latelyWorkPoint -1] == 0)
    {
        colorArray.pop();
        xyArray.pop();
        indexPoint -= 1;
    }
    else if(latelyWorkArray[latelyWorkPoint -1] == 1)
    {
        imageArray.pop();
        imagexyArray.pop();
        imageindexPoint -= 1;
    }
    latelyWorkPoint -= 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for(i = 0; i < indexPoint; i++)
    {
        ctx.beginPath();
        ctx.strokeStyle = colorArray[i];
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(xyArray[i][0], xyArray[i][1]);
        ctx.lineTo(xyArray[i][2], xyArray[i][3]);
        ctx.closePath();
        ctx.stroke();
    }
    for(i = 0; i < imageindexPoint; i++) {
        var catImage = new Image();
        catImage.src = imageArray[i];
        ctx.drawImage(catImage, imagexyArray[i][0], imagexyArray[i][1], 42, 36);
    }
    startCenterX = startCenterY = endCenterY = endCenterX = undefined;
    printTime();
    $("#log").append("Undo");
    $("#log").append(document.createElement('br'));
    log.scrollTop = log.scrollHeight;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for(i = 0; i <= indexPoint; i++)
    {
        colorArray.pop();
        xyArray.pop();
    }
    indexPoint = 0;
    for(i = 0; i <= imageindexPoint; i++)
    {
        imageArray.pop();
        imagexyArray.pop();
    }
    imageindexPoint = 0;
    startCenterX = startCenterY = endCenterY = endCenterX = undefined;
    printTime();
    $("#log").append("Clear Area");
    $("#log").append(document.createElement('br'));
    log.scrollTop = log.scrollHeight;
}

function findStartHole(x, y) {
    var canvas = document.elementFromPoint(x, y);
    canvas.style.display = "none";
    startHole = document.elementFromPoint(x, y);
    startCenterX = startHole.offsetLeft + (startHole.offsetWidth / 10);
    startCenterY = startHole.offsetTop + (startHole.offsetHeight / 10);
    switch(startHole.className){
        case 'hole':
            break;
        case 'mhole':
            break;
        case 'centerRect':
            startHole = startHole.parentNode;
            startCenterX = startHole.offsetLeft + (startHole.offsetWidth / 10);
            startCenterY = startHole.offsetTop + (startHole.offsetHeight / 10);
            break;
        default :
            startCenterX = undefined;
            startCenterY = undefined;
            break;
    }

    canvas.style.display = "";
    xyArray[indexPoint] = new Array(4);
    xyArray[indexPoint][0] = startCenterX;
    xyArray[indexPoint][1] = startCenterY;

    for(i = 0; i < imageindexPoint; i++) {
        var catImage = new Image();
        catImage.src = imageArray[i];
        ctx.drawImage(catImage, imagexyArray[i][0], imagexyArray[i][1], 42, 36);
    }
}
function findEndHole(x, y) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var canvas = document.elementFromPoint(x, y);
    canvas.style.display = "none";
    endHole = document.elementFromPoint(x, y);
    endCenterX = endHole.offsetLeft + (endHole.offsetWidth / 10);
    endCenterY = endHole.offsetTop + (endHole.offsetHeight / 10);
    switch(endHole.className){
        case 'hole':
            if(startHole.className=="mhole"){ //시작점이 중앙
                if(endHole.parentNode.id=='topplusline' || endHole.parentNode.id=='bottomplusline'){
                    eval(endHole.parentNode.id).V = topplusline.V;
                    parentArray.push(startHole.parentNode.id);
                }else{
                    eval(endHole.parentNode.id).V = 0;
                }
            }
            break;
        case 'mhole':
            if(startHole.parentNode.id=='topplusline' || startHole.parentNode.id=='bottomplusline'){
                eval(endHole.parentNode.id).V = topplusline.V;
                parentArray.push(endHole.parentNode.id);
            }
            else{
                eval(endHole.parentNode.id).V = 0;
            }
            break;
        case 'centerRect':
            endHole = endHole.parentNode;
            endCenterX = endHole.offsetLeft + (endHole.offsetWidth / 10);
            endCenterY = endHole.offsetTop + (endHole.offsetHeight / 10);
            if(startHole.className=="mhole"){ //시작점이 중앙
                if(endHole.parentNode.id=='topplusline' || endHole.parentNode.id=='bottomplusline'){
                    eval(endHole.parentNode.id).V = topplusline.V;
                    parentArray.push(startHole.parentNode.id);
                }else{
                    eval(endHole.parentNode.id).V = 0;
                }
            }else if(startHole.className=="hole"){
                if(endHole.parentNode.id=='topplusline' || endHole.parentNode.id=='bottomplusline'){
                    eval(endHole.parentNode.id).V = topplusline.V;
                    parentArray.push(endHole.parentNode.id);
                }else{
                    eval(endHole.parentNode.id).V = 0;
                    //console.log(eval(endHole.parentNode.id).V);
                }
            }
            break;
        default :
            endCenterX = undefined;
            endCenterY = undefined;
            break;
    }
    canvas.style.display = "";
    if(xyArray[indexPoint][0] != 0 && xyArray[indexPoint][1] != 0) {
        colorArray[indexPoint] = $('#selColor').val();
        xyArray[indexPoint][2] = endCenterX;
        xyArray[indexPoint][3] = endCenterY;
        indexPoint++;
        latelyWorkArray[latelyWorkPoint] = 0;
        latelyWorkPoint++;
    }

    for(i = 0; i < indexPoint; i++)
    {
        ctx.beginPath();
        ctx.strokeStyle = colorArray[i];
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(xyArray[i][0], xyArray[i][1]);
        ctx.lineTo(xyArray[i][2], xyArray[i][3]);
        ctx.closePath();
        ctx.stroke();
    }
    for(i = 0; i < imageindexPoint; i++) {
        var catImage = new Image();
        catImage.src = imageArray[i];
        ctx.drawImage(catImage, imagexyArray[i][0], imagexyArray[i][1], 42, 36);
    }

    if(startCenterX!=undefined && startCenterY!=undefined && endCenterX!=undefined && endCenterY!=undefined) {
        printTime();
        $("#log").append("lineTo : '" + startHole.id + "' to '" + endHole.id+"'");
        $("#log").append(document.createElement('br'));
        log.scrollTop = log.scrollHeight;
    }
}