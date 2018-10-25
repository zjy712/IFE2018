// var newplate = document.createElement('div');
var plate = {
    'x' : 30,
    'y' : 700,
    'height': 100,
    'width' : 550
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
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = '2';
    var num = a.list.length;
    var newplate = {};
    newplate.X = plate.x * (num+1);
    newplate.Y = plate.y  - (num*plate.height+10);
    newplate.H = plate.height;
    newplate.W = plate.width - (num*30*2);
    ctx.fillRect(newplate.X,newplate.Y, newplate.W, newplate.H);
    ctx.strokeRect(newplate.X,newplate.Y, newplate.W, newplate.H);
    a.list.push(newplate);

    // var time = setInterval(function () {
    //     if (i == 1000) {
    //         clearInterval(time);
    //     }
    //     if (x <= 500) {
    //         i++;
    //         x += 1;
    //         ctx.clearRect(x - 1, 100, 250, 250);
    //         ctx.fillRect(x, 100, 250, 100);
    //     } else {
    //         i++;
    //         y += 1
    //         ctx.clearRect(x, y - 1, 250, 250);
    //         ctx.fillRect(x, y, 250, 250);
    //     }
    // }, 5)
    // ctx.arc(100,100,94,0,2*Math.PI,false);
    // // ctx.translate(100,100)
    // ctx.stroke()
    // setTimeout(function () {
    //     ctx.clearRect(100,100,250,250)
    //     ctx.stroke()
    // },5000)
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
    console.log('结束');

});
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
    var aCoord = a.list[num1 - 1];
    // var aCoord = $(aplate).css(['bottom', 'left']);
    var upY = 0;
    var i =0;
    var x =0;
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    var time = setInterval(function () {

        if (aCoord.Y == upY) {
            console.log(aCoord.Y);
            
            clearInterval(time);
        } else
        {
            console.log(aCoord.Y);
            i++;
            x +=5;
            ctx.clearRect(aCoord.X-2, aCoord.Y+2, aCoord.W+4, aCoord.H);
            ctx.fillRect(aCoord.X, aCoord.Y-5, aCoord.W, aCoord.H);
            aCoord.Y -= 5;
        }
    }, 1)
    // var rowanimate = parseInt(aCoord.left) + num3 * 300;
    // var downanimate = (num2 + 1) * 52;

    // console.log(a.name, aCoord.index + '  upanimate' + upanimate + '  rowanimate' + rowanimate + '  downanimate' + downanimate + '=======>' + c.name);
    // console.log('before' + aCoord.left, aCoord.bottom);

    // aCoord.bottom = downanimate;
    // aCoord.left = rowanimate;
    // console.log('after' + aCoord.left, aCoord.bottom);
    // var step = {
    //     'index': aCoord.index,
    //     'upanimate': upanimate,
    //     'rowanimate': rowanimate,
    //     'downanimate': downanimate
    // }
    // animationsteps.push(step)


    // c.list.push(a.list.pop())
}