/**
 * Created by kmin on 2015-07-22.
 */

function selChap() {
    // Use the identity matrix while clearing the canvas
    var ch =  $('#selChapter').val();

    if(ch == 'ch1') {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch2') {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch3') {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch4') {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";
    }
    else if(ch == 'ch5') {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
        f.style.display = "none";
    }
    else if(ch == 'ch6') {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "block";
    }
    else {
        var a = document.getElementById('ch1');
        var b = document.getElementById('ch2');
        var c = document.getElementById('ch3');
        var d = document.getElementById('ch4');
        var e = document.getElementById('ch5');
        var f = document.getElementById('ch6');
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    }
}

function show1() {
    // Use the identity matrix while clearing the canvas
    var qn =  $('#ch1').val();
    if(qn == 'q1') {
        var a = document.getElementById('1_1');
        var b = document.getElementById('1_2');
        var c = document.getElementById('1_3');
        var d = document.getElementById('1_4');
        var e = document.getElementById('1_5');

        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }

    else if(qn == 'q2') {
        var a = document.getElementById('1_1');
        var b = document.getElementById('1_2');
        var c = document.getElementById('1_3');
        var d = document.getElementById('1_4');
        var e = document.getElementById('1_5');

        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }

    else if(qn == 'q3') {
        var a = document.getElementById('1_1');
        var b = document.getElementById('1_2');
        var c = document.getElementById('1_3');
        var d = document.getElementById('1_4');
        var e = document.getElementById('1_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
        e.style.display = "none";
    }

    else if(qn == 'q4') {
        var a = document.getElementById('1_1');
        var b = document.getElementById('1_2');
        var c = document.getElementById('1_3');
        var d = document.getElementById('1_4');
        var e = document.getElementById('1_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        e.style.display = "none";
    }

    else if(qn == 'q5') {
        var a = document.getElementById('1_1');
        var b = document.getElementById('1_2');
        var c = document.getElementById('1_3');
        var d = document.getElementById('1_4');
        var e = document.getElementById('1_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
    }

    else {
        var a = document.getElementById('1_1');
        var b = document.getElementById('1_2');
        var c = document.getElementById('1_3');
        var d = document.getElementById('1_4');
        var e = document.getElementById('1_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}

function show2() {
    // Use the identity matrix while clearing the canvas
    var qn =  $('#ch2').val();
    if(qn == 'q1') {
        var a = document.getElementById('2_1');
        var b = document.getElementById('2_2');
        var c = document.getElementById('2_3');
        var d = document.getElementById('2_4');
        var e = document.getElementById('2_5');

        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }

    else if(qn == 'q2') {
        var a = document.getElementById('2_1');
        var b = document.getElementById('2_2');
        var c = document.getElementById('2_3');
        var d = document.getElementById('2_4');
        var e = document.getElementById('2_5');

        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }

    else if(qn == 'q3') {
        var a = document.getElementById('2_1');
        var b = document.getElementById('2_2');
        var c = document.getElementById('2_3');
        var d = document.getElementById('2_4');
        var e = document.getElementById('2_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
        e.style.display = "none";
    }

    else if(qn == 'q4') {
        var a = document.getElementById('2_1');
        var b = document.getElementById('2_2');
        var c = document.getElementById('2_3');
        var d = document.getElementById('2_4');
        var e = document.getElementById('2_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
        e.style.display = "none";
    }

    else if(qn == 'q5') {
        var a = document.getElementById('2_1');
        var b = document.getElementById('2_2');
        var c = document.getElementById('2_3');
        var d = document.getElementById('2_4');
        var e = document.getElementById('2_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "block";
    }

    else {
        var a = document.getElementById('2_1');
        var b = document.getElementById('2_2');
        var c = document.getElementById('2_3');
        var d = document.getElementById('2_4');
        var e = document.getElementById('2_5');

        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    }
}