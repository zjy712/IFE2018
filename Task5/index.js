// var newplate = document.createElement('div');
var newcss = {
    'height': '50px',
    'background-color': 'red',
    'margin-top': '10px',
    'position': 'absolute',
}
var a = {
    name: 'a',
    list: []
}; //存储塔上的盘子
var b = {
    name: 'b',
    list: []
}
var c = {
    name: 'c',
    list: []
}
var animationsteps = []; //储存动画步骤

$('.btn1').click(function (e) {
    e.preventDefault();
    var newplate = document.createElement('div');
    var num = $('.box>div').length;
    var width = 250 - num * 30;
    var left = 16.5 * (num + 1);
    var bottom = 55 * (num + 1);
    newcss.width = width + 'px';
    newcss.left = left + 'px';
    newcss.bottom = bottom + 'px';
    $(newplate).prependTo('.box').css(newcss).attr('index', num);
    var css = {
        'index': num,
        'left': left,
        'bottom': bottom
    }
    a.list.push(css);
    // a.list.num.css = {
    //     'left' : left,
    //     'bottom' : bottom
    // }

});
$('.btn2').click(function (e) {
    e.preventDefault();
    // var platelist = $('.box>div')
    // $(platelist[0]).animate({
    //     bottom: '+=235'
    // }, 500
    // ).animate({
    //     left: '+=300'
    // }, 500)
    var n = a.list.length;
    hanoi(n, a, b, c);
    start(0)
    console.log('结束');

});
var start = function (step) {
    if (step < animationsteps.length) {
        go(animationsteps[step])
        step++;

        setTimeout(function () {
            start(step)
        }, 1500)
    } else {
        alert('完成');
    }
}
var go = function (step) {
    var plate = 'div[index |=' + step.index + ']';
    $(plate).animate({
        bottom: step.upanimate
    }, 500).animate({
        left: step.rowanimate
    }, 500).animate({
        bottom: step.downanimate
    }, 500);
}
var hanoi = function (n, a, b, c) {

    if (n >= 1) {
        hanoi(n - 1, a, c, b);
        move(n, a, c);
        hanoi(n - 1, b, a, c);
    }
}
var move = function (n, a, c) {

    var num1 = a.list.length;;

    var num2 = c.list.length;
    var num3 = c.name.charCodeAt() - a.name.charCodeAt();
    // var aplate = 'div[index |=' + a.list[num1-1] + ']';
    // var acss = $(aplate).css(['bottom', 'left']);
    // var upanimate = 465 - parseInt(acss.bottom);
    // var rowanimate = parseInt(acss.left) + num3 * 300;
    // var downanimate = (num2 + 1) * 52;

    var acss = a.list[num1 - 1];
    // var acss = $(aplate).css(['bottom', 'left']);
    var upanimate = 520 - parseInt(acss.bottom);
    var rowanimate = parseInt(acss.left) + num3 * 300;
    var downanimate = (num2 + 1) * 52;

    console.log(a.name, acss.index + '  upanimate' + upanimate + '  rowanimate' + rowanimate + '  downanimate' + downanimate + '=======>' + c.name);
    console.log('before' + acss.left, acss.bottom);

    acss.bottom = downanimate;
    acss.left = rowanimate;
    console.log('after' + acss.left, acss.bottom);
    var step = {
        'index': acss.index,
        'upanimate': upanimate,
        'rowanimate': rowanimate,
        'downanimate': downanimate
    }
    animationsteps.push(step)
    // animationsteps.push(acss)
    // $(aplate).animate({
    //     bottom: upanimate
    // }, 500).animate({
    //     left: rowanimate
    // }, 500).animate({
    //     bottom: downanimate
    // });

    c.list.push(a.list.pop())
}