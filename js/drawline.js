var mousePressed = false;
var lastX, lastY;
var ctx;
var startCenterX, startCenterY, endCenterX, endCenterY;
var colorArray = new Array;
var xyArray = new Array;
var indexPoint = 0;
var cPushArray = new Array();
var latelyWorkArray = new Array;
var latelyWorkPoint = 0;
var cStep = -1;
var i;

function InitThis() {

    ctx = document.getElementById('myCanvas').getContext("2d");

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
        cPush();
    });
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
        cPush();
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
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('myCanvas').toDataURL());
}
function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
        if(latelyWorkArray[latelyWorkPoint -1] == 0)
        {
            colorArray.pop();
            xyArray.pop();
            indexPoint--;
        }
        else if(latelyWorkArray[latelyWorkPoint -1] == 1)
        {
            imageArray.pop();
            imagexyArray.pop();
            imageindexPoint--;
        }
        latelyWorkPoint--;
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
        console.log(imageindexPoint);
        console.log(String(imageX));
        ctx.drawImage(catImage, imagexyArray[i][0], imagexyArray[i][1], 42, 36);
    }
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
}

function findStartHole(x, y) {
    var canvas = document.elementFromPoint(x, y);
    canvas.style.display = "none";
    var hole = document.elementFromPoint(x, y);
    console.log(hole);
    if (hole.className == "mhole" || hole.className == "hole") {
        startCenterX = hole.offsetLeft + (hole.offsetWidth / 10);
        startCenterY = hole.offsetTop + (hole.offsetHeight / 10);
    }else if(hole.className == "centerRect") {
        startCenterX = hole.offsetLeft - hole.offsetWidth;
        startCenterY = hole.offsetTop - hole.offsetHeight;
    }
    canvas.style.display = "";
    xyArray[indexPoint] = new Array(4);
    xyArray[indexPoint][0] = startCenterX;
    xyArray[indexPoint][1] = startCenterY;
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

    for(i = 0; i < imageindexPoint; i++)
    {
        var catImage = new Image();
        catImage.src = imageArray[i];
        console.log(imageindexPoint);
        console.log(String(imageX));
        ctx.drawImage(catImage, imagexyArray[i][0], imagexyArray[i][1], 42, 36);

    }
    cPush();
}
function findEndHole(x, y) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var canvas = document.elementFromPoint(x, y);
    canvas.style.display = "none";
    var hole = document.elementFromPoint(x, y);
    console.log(hole);
    if (hole.className == "mhole" || hole.className == "hole") {
        endCenterX = hole.offsetLeft + (hole.offsetWidth / 10);
        endCenterY = hole.offsetTop + (hole.offsetHeight / 10);
        canvas.style.display = "";
        ctx = document.getElementById('myCanvas').getContext("2d");
        ctx.beginPath();
        ctx.moveTo(startCenterX, startCenterY);
        ctx.lineTo(endCenterX, endCenterY);
        ctx.closePath();
        ctx.stroke();
    }else if(hole.className == "centerRect") {
        endCenterX = hole.offsetLeft - hole.offsetWidth;
        endCenterY = hole.offsetTop - hole.offsetHeight;
        canvas.style.display = "";
        ctx = document.getElementById('myCanvas').getContext("2d");
        ctx.beginPath();
        ctx.moveTo(startCenterX, startCenterY);
        ctx.lineTo(endCenterX, endCenterY);
        ctx.closePath();
        ctx.stroke();
    }else canvas.style.display = "";
    colorArray[indexPoint] = $('#selColor').val();
    xyArray[indexPoint][2] = endCenterX;
    xyArray[indexPoint][3] = endCenterY;
    indexPoint++;
    latelyWorkArray[latelyWorkPoint] = 0;
    latelyWorkPoint++;

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
        console.log(imageindexPoint);
        console.log(String(imageX));
        ctx.drawImage(catImage, imagexyArray[i][0], imagexyArray[i][1], 42, 36);
    }
    cPush();
}