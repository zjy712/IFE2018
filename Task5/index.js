// var newplate = document.createElement('div');
var plate = {
    'x': 30,
    'y': 700,
    'height': 100,
    'width': 550
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

var Canvas = document.getElementById('myCanvas');
var ctx = Canvas.getContext('2d');

$('.btn1').click(function (e) {
    e.preventDefault();
    ctx.fillStyle = 'red';
    var num = a.list.length;
    var newplate = {};
    newplate.X = plate.x * (num + 1);
    newplate.Y = plate.y - (num * plate.height + 10);
    newplate.H = plate.height;
    newplate.W = plate.width - (num * 30 * 2);
    ctx.fillRect(newplate.X, newplate.Y, newplate.W, newplate.H);
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

    var num1 = a.list.length;

    var num2 = c.list.length;
    var num3 = c.name.charCodeAt() - a.name.charCodeAt();
    var aCoord = a.list[num1 - 1];
    // var aCoord = $(aplate).css(['bottom', 'left']);
    var upY = 0;
   
    new Promise(function (resolve, reject) {
        console.log('Promise1 start');
        
        var time = setInterval(function () {
            if (aCoord.Y == upY) {
                setTimeout(resolve, 500, aCoord);
                clearInterval(time);
                console.log('Promise1 end');
            } else {
                ctx.clearRect(aCoord.X, aCoord.Y , aCoord.W, aCoord.H);
                ctx.fillRect(aCoord.X, aCoord.Y - 5, aCoord.W, aCoord.H);
                aCoord.Y -= 5;
            }
        }, 1);
        
    })
        .then(function (Coord) {
            console.log('Promise2 start');
            var upRow = Coord.X + num3 *600;
            var time2 = setInterval(function () {
                if (Coord.X == upRow) {
                    console.log('Promise2 end');
                    setTimeout(resolve, 100, Coord);
                    clearInterval(time2);
                } else {
                    ctx.clearRect(Coord.X, Coord.Y , Coord.W, Coord.H);
                    ctx.fillRect(Coord.X + 5*num3, Coord.Y, Coord.W, Coord.H);
                    Coord.X += 5*num3
                }
            }, 1);
        })
        .then(function(Coord) {
            console.log('Promise3 start');
            var updown= 800- (num2 + 1) * 100;;
            var time3 = setInterval(function () {
                if (Coord.Y == updown) {
                    console.log('Promise3 end');
                    clearInterval(time3);
                } else {
                    ctx.clearRect(Coord.X, Coord.Y , Coord.W, Coord.H);
                    ctx.fillRect(Coord.X, Coord.Y+5, Coord.W, Coord.H);
                    Coord.Y += 5
                }
            }, 1);
        })
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
// var movePromise = new Promise(function (resolve, reject) {
//     console.log('start mew Promise...');
//     var num1 = a.list.length;
//     var Coord = a.list[num1 - 1];

//     resolve(Coord);
// })
