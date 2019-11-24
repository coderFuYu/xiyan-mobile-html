window.onload = function () {
    var button_box = document.getElementsByClassName('button_box')[0];
    var circle_button = document.getElementsByClassName('circle_button')[0];
    var button2 = button1 = button = new Array();
    var i = 0;
    var select = $('select');
    var close = $('close');
    var affirm = $('affirm');
    button = document.getElementsByClassName('button');
    button1 = document.getElementsByClassName('button1');
    button2 = document.getElementsByClassName('button2');
    var input_yz = $('input_yz');
    var extra_rmb = $('extra_rmb');
    var submit = $('submit');
    var z_index = $('z-index');
    submit.onclick = function () {
        z_index.style.display = 'block';
        select.style.display = 'block';
    };
    close.onclick = function () {
        z_index.style.display = 'none';
        select.style.display = 'none';
    };
    affirm.onclick = function () {
        z_index.style.display = 'none';
        select.style.display = 'none';
    };
    var button_box_p = 1;
    button_box.onclick = function () {
        if(button_box_p===0){
            button_box.style.backgroundColor='#D3B66F';
            circle_button.style.right='0px';
            button_box.style.border='none';
            button_box_p=1;
        }else{
            button_box.style.backgroundColor='#fff';
            circle_button.style.right='16px';
            button_box_p=0;
            button_box.style.border='1px solid #a2a2a2';
        }
    };
    for(i=0;i<2;i++){
        (function (i) {
            button[i].onclick=function () {
                button[i].style.backgroundImage='url(img//10.gwc/4.png)';
                button[i].style.border='none';
                button[1-i].style.backgroundImage='none';
                button[1-i].style.border='1px solid #a2a2a2';


            }
        })(i)
    }
    input_yz.oninput = function () {
        if (input_yz.value > 1000) {
            input_yz.value = 1000;
            extra_rmb.innerText =1214;
            alert('颜值使用上限为1000！');
        } else {
            extra_rmb.innerText = 1314.00 - (input_yz.value / 10);
        }

        // console.log(input_yz.value);
    }

    for (i = 0; i < 2; i++) {
        (function (i) {
            button[i].onclick = function () {
                button[i].style.backgroundImage = 'url(img//10.gwc/4.png)';
                button[1 - i].style.backgroundImage = 'none';
            }
        })(i)
    }
    for (i = 0; i < 2; i++) {
        (function (i) {
            button1[i].onclick = function () {
                button1[i].style.backgroundImage = 'url(img//11.qrdd/dot.png)';
                button1[1 - i].style.backgroundImage = 'url(img//11.qrdd/circle.png)';
            }
        })(i)
    }

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }
}