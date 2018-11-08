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
});

$('.btn2').click(function (e) {
    e.preventDefault();
    var n = a.list.length;
    hanoi(n, a, b, c);
    console.log('结束');

});

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

    var upY = 0;
    var upRow = aCoord.X + num3 * 600;
    var updown = 800 - (num2 + 1) * 100;

    return new Promise(function (resolve, reject) {
        function animate() {
            console.log('Promise1 start');
            var time = setInterval(function () {
                if (aCoord.Y == upY) {
                    setTimeout(resolve, 500, aCoord);
                    console.log('Promise1 end');
                    clearInterval(time);
                } else {
                    ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
                    ctx.fillRect(aCoord.X, aCoord.Y - 5, aCoord.W, aCoord.H);
                    aCoord.Y -= 5;
                }
            }, 1);
        }
        animate()
    })
        .then(function (aCoord) {
            return new Promise(function (resolve, reject) {
                console.log('Promise2 start');
                for (let i = 0; i < 10; i++) {
                    console.log('Promise2 ========' + i)
                }
                console.log('Promise2 end');
                resolve(aCoord);
                // var time2 = setInterval(function () {
                //     if (aCoord.X == upRow) {
                //         console.log('Promise2 end');
                //         clearInterval(time2);
                //         setTimeout(resolve, 500, aCoord);

                //     } else {
                //         ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
                //         ctx.fillRect(aCoord.X + 5 * num3, aCoord.Y, aCoord.W, aCoord.H);
                //         aCoord.X += 5 * num3
                //     }
                // }, 1);
            })

        })
        .then(function (aCoord) {
            return new Promise(function (resolve, reject) {
                console.log('Promise2 start');
                for (let i = 0; i < 10; i++) {
                    console.log('Promise2 ========' + i)
                }
                console.log('Promise2 end');
                resolve(aCoord);
                // var time3 = setInterval(function () {
                //     if (aCoord.Y == updown) {
                //         console.log('Promise3 end');
                //         c.list.push(a.list.pop())
                //         clearInterval(time3);
                //     } else {
                //         ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
                //         ctx.fillRect(aCoord.X, aCoord.Y + 5, aCoord.W, aCoord.H);
                //         aCoord.Y += 5
                //     }
                // }, 1);
            });
        });


}
