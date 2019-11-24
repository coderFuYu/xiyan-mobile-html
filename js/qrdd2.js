window.onload=function () {
    var button_box = document.getElementsByClassName('button_box')[0];
    var circle_button = document.getElementsByClassName('circle_button')[0];
    var button=new Array();
    var i=0;
    button=document.getElementsByClassName('button');
    console.log(button);
    var button_box_p=1;
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

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }
}