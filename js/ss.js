window.onload = function () {
    var input = $('input');
    var clear = $('clear');
    var more = $('more');
    var block = $('block');
    var search_back = $('back');
    var ul = $('ul');
    var down = $('down');
    var a = '';
    var i = 0;
    var more_p = 0;
    var block_clone;
    var offsettop = 80;
    var delete_p = 0;
    document.onkeydown = function () {
        if (event.keyCode === 13) {
            a = input.value;
            if (a.length === 0) {
                alert('输入不能为空');
                return;
            }
            var li = document.createElement('li');
            li.name = a;
            if (a.length > 10) {
                a = a.substring(0, 9) + '...';
            }
            li.innerHTML = '<a>' + a + '</a>';
            ul.insertBefore(li, ul.children[0]);
            input.value = '';
            console.log(block.offsetTop);
            while (block.offsetTop > offsettop) {
                more.style.display = 'block';
                block_clone = block.cloneNode(true);
                ul.insertBefore(block_clone, block.previousSibling);
                ul.replaceChild(block.previousSibling, block);
                block = block_clone;
            }
            if (more_p === 1) {
                block.style.display = 'none';
            }
        }
    };
    clear.onclick = function () {//清除所有记录
        var children = ul.children;
        var len = children.length;
        var remove_p = 0;
        for (i = 0; i < len - 1; i++) {
            if (children[remove_p] === block) {
                remove_p = 1;
                continue;
            }
            children[remove_p].remove();
        }
        block.style.display = 'inline-block';
        more.style.display = 'none';
        search_back.style.display = 'none';
        down.style.overflow = 'hidden';
        more_p = 0;
    };
    more.onclick = function () {//显示更多记录
        down.style.overflow = 'visible';
        block.style.display = 'none';
        more.style.display = 'none';
        search_back.style.display = 'inline-block';
        more_p = 1;
    };
    search_back.onclick = function () {
        down.style.overflow = 'hidden';
        block.style.display = 'inline-block';
        more.style.display = 'block';
        search_back.style.display = 'none';
        more_p = 0;
    };

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }
};