window.onload = function () {
    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }

    var add_in_car = $('add_in_car');
    var center = $('center');
    var add = $('add');
    var confirm = $('footer2_queren');
    var deletes = $('delete');
    var ul1 = $('ul1');
    var ul2 = $('ul2');
    var ul3 = $('ul3');
    var span1 = $('s2');
    var span2 = $('s3');
    var span3 = $('span1');
    var span4 = $('span2');

    var li1 = li2 = li3 = new Array();
    li1 = ul1.children;
    li2 = ul2.children;
    li3 = ul3.children;
    for (var i = 0; i < li1.length; i++) {
        (function (i) {
            li1[i].onclick = function () {
                for (var j = 0; j < li1.length; j++) {
                    li1[j].style.border = "1px solid #D7D7D7";
                }
                this.style.border = "1px solid orange";
                switch (i) {
                    case 0: {
                        span1.innerText = '藏青色';
                        break;
                    }
                    case 1: {
                        span1.innerText = '玫瑰灰粉色';
                        break;
                    }
                    case 2: {
                        span1.innerText = '浅棕色';
                        break;
                    }
                }

            }
        })(i)
    }
    for (i = 0; i < li2.length; i++) {
        (function (i) {
            li2[i].onclick = function () {
                for (var j = 0; j < li2.length; j++) {
                    li2[j].style.border = "1px solid #D7D7D7";
                }
                this.style.border = "1px solid orange";
                switch (i) {
                    case 0: {
                        span2.innerText = 'S';
                        break;
                    }
                    case 1: {
                        span2.innerText = 'M';
                        break;
                    }
                    case 2: {
                        span2.innerText = 'L';
                        break;
                    }
                    case 3: {
                        span2.innerText = 'XL';
                        break;
                    }
                }
            }
        })(i)


    }
    var num = 1;

    li3[2].onclick = function () {
        num += 1;
        li3[1].innerText = num;
    };
    li3[0].onclick = function () {

        if (num > 1) {
            num -= 1;
            li3[1].innerText = num;
        } else {
            num = 1;
            li3[1].innerText = num;

        }
    }
    window.onscroll = function () {//顶部渐变显现
        var height = document.documentElement.scrollTop;
        if (height < 400) {
            center.style.opacity = height / 400;
        } else {
            center.style.opacity = 1;
        }
    };
    add_in_car.onclick = function () {
        add.style.display = 'block';
    };
    confirm.onclick = function (event) {
        add.style.display = 'none';
        span3.innerText=span1.innerText;
        span4.innerText=span2.innerText;

    };
    deletes.onclick = function () {
        add.style.display = 'none';

    }

};