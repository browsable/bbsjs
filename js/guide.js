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
        a.style.display = "inline-block";
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
        b.style.display = "inline-block";
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
        c.style.display = "inline-block";
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
        d.style.display = "inline-block";
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
        e.style.display = "inline-block";
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
        f.style.display = "inline-block";
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
    imgnum="images/guide/" + qn + ".PNG";
    imgGuide.innerHTML = "<img src=" + imgnum + " width='100%' height='100%'>";
    loadXMLDoc(qn);

}
function show3() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch3').val();
    imgnum="images/guide/" + qn + ".PNG";
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
    loadXMLDoc(qn);
}
function show4() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch4').val();
    imgnum="images/guide/" + qn + ".PNG";
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
    loadXMLDoc(qn);
}
function show5() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch5').val();
    imgnum="images/guide/" + qn + ".PNG";
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
    loadXMLDoc(qn);
}
function show6() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch6').val();
    imgnum="images/guide/" + qn + ".PNG";
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
    loadXMLDoc(qn);
}
function show7() {
    // Use the identity matrix while clearing the canvas
    var guide = document.getElementById("imgGuide");
    var qn =  $('#ch7').val();
    imgnum="images/guide/" + qn + ".PNG";
    imgGuide.innerHTML = "<img src=" + imgnum + " width='407'>";
    loadXMLDoc(qn);
}

function loadXMLDoc(txtnum) {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("txtGuide").innerHTML=xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET","asset/txt/"+ txtnum +".txt",true);
    xmlhttp.send();
}