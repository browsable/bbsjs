/**
 * Created by hernia on 2015-07-21.
 */
function loadCanvas(id) {
    var canvas = document.createElement('canvas');
    div = document.getElementById(id);
    canvas.id     = "myCanvas";
    canvas.width  = 890;
    canvas.height = 480;
    canvas.style.zIndex   = 8;
    canvas.style.position = "absolute";
    div.appendChild(canvas)
}