/**
 * Created by kmin on 2015-07-22.
 */

function selChap() {
    // Use the identity matrix while clearing the canvas

    var ch =  $('#selChapter').val();

    if(ch == 'ch2') {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch3') {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch4') {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch5') {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch6') {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "none";
    }
    else if(ch == 'ch7') {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "block";
    }
    else {
        var a = document.getElementById('ch2');
        var b = document.getElementById('ch3');
        var c = document.getElementById('ch4');
        var d = document.getElementById('ch5');
        var e = document.getElementById('ch6');
        var f = document.getElementById('ch7');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function show2() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch2').val();
    imgnum="images/guide/" + qn + ".PNG"
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
}

function show3() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch3').val();
    imgnum="images/guide/" + qn + ".PNG"
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
}