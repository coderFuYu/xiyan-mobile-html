function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    };
    $('whole').style.height = document.documentElement.clientHeight + 'px';
    $('share').style.lineHeight = document.documentElement.clientHeight * 0.06 + 'px';
