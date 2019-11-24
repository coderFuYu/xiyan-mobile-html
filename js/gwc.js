window.onload = function () {
    var com = $('commodity');
    var rmb = new Array();
    var jf = new Array();
    var rmbj = new Array();
    var jfj = new Array();
    var select = new Array();
    var button = new Array();
    var li = new Array();
    var plus = new Array();
    var numj = new Array();
    var num = new Array();
    var reduce = new Array();
    var trmb = 0;
    var i = 0;
    var allselectp = 0;
    var allselect =$('button');
    var tolrmb = $('tolrmb');
    var toljf = $('toljf');
    var clear =$('clear');
    var overduecommodity=$('overduecommodity');
    var overdue=$('overdue');
    li = com.getElementsByClassName('com');
    button = document.getElementsByClassName('button');
    rmbj = document.getElementsByClassName('rmb');
    jfj = document.getElementsByClassName('jf');
    plus = document.getElementsByClassName('plus');
    numj = document.getElementsByClassName('num');
    reduce = document.getElementsByClassName('reduce');
    clear.onclick=function () {
        overdue.remove();
        overduecommodity.remove();
    };
    for (i = 0; i < button.length; i++) {
        jf[i] = parseFloat(jfj[i].innerText);
        rmb[i] = parseFloat(rmbj[i].innerText);
        num[i] = parseFloat(numj[i].innerText);
    }

    select.length = button.length;
    console.log(plus);
    for (i = 0; i < select.length; i++) {
        select[i] = 0;
    }
    allselect.onclick = function () {
        if (allselectp === 0) {
            allselect.style.backgroundImage = 'url(img/10.gwc/4.png)';
            allselect.style.border='1px solid #fff';
            for (i = 0; i < button.length; i++) {
                button[i].style.backgroundImage = 'url(img/10.gwc/4.png)';
                button[i].style.border='1px solid #fff';
                select[i] = 1;
            }
            allselectp = 1;
        } else {
            allselect.style.backgroundImage = 'none';
            allselect.style.border='1px solid #000';
            for (i = 0; i < button.length; i++) {
                button[i].style.backgroundImage = 'none';
                button[i].style.border='1px solid #000';
                select[i] = 0;
            }
            allselectp = 0;
        }
        tolrmb.innerText = totlermb();
        toljf.innerText = totlejf();
    };
    for (i = 0; i < button.length; i++) {
        (function (i) {
            button[i].onclick = function () {
                if (select[i] === 0) {
                    button[i].style.backgroundImage = 'url(img/10.gwc/4.png)';
                    button[i].style.border='1px solid #fff';
                    select[i] = 1;
                    var p = 0;
                    for (var j = 0; j < button.length; j++) {
                        p += select[j];
                    }
                    if (p === button.length) {
                        allselect.style.backgroundImage = 'url(img/10.gwc/4.png)';
                        allselect.style.border='1px solid #fff';
                        allselectp = 1;
                    }
                    tolrmb.innerText = totlermb();
                    toljf.innerText = totlejf();
                } else {
                    allselect.style.backgroundImage = 'none';
                    allselect.style.border='1px solid #000';
                    button[i].style.backgroundImage = 'none';
                    button[i].style.border='1px solid #000';
                    allselectp = 0;
                    select[i] = 0;
                    tolrmb.innerText = totlermb();
                    toljf.innerText = totlejf();
                }

            };
            plus[i].onclick = function () {
                num[i]++;
                numj[i].innerText = num[i];
                tolrmb.innerText = totlermb();
                toljf.innerText = totlejf();
            };
            reduce[i].onclick = function () {

                if (num[i] > 1) {
                    num[i]--;
                    numj[i].innerText = num[i];

                    tolrmb.innerText = totlermb();
                    toljf.innerText = totlejf();
                } else {
                    num[i] = 1;
                    numj[i].innerText = num[i];
                    tolrmb.innerText = totlermb();
                    toljf.innerText = totlejf();
                }
            }
        })(i);
    }

    function totlermb() {
        var tol = 0;
        for (i = 0; i < button.length; i++) {
            tol += rmb[i] * select[i] * num[i];

        }
        return tol;
    }

    function totlejf() {
        var tol = 0;
        for (i = 0; i < button.length; i++) {
            tol += jf[i] * select[i] * num[i];
        }
        return tol;

    }

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }
};