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

var hanoi = function (n, a, b, c) {
    if (n >= 1) {
        hanoi(n - 1, a, c, b);
        let func = function() {
            return new Promise((resolve, reject) => {
                resolve('返回值');
            });
        };
        
        let cb = function() {
            return '新的值';
        }
        
        func().then(function () {
            return cb();
        }).then(resp => {
            console.warn(resp);
            console.warn('1 =========<');
        });
        
        func().then(function () {
            cb();
        }).then(resp => {
            console.warn(resp);
            console.warn('2 =========<');
        });
        
        func().then(cb()).then(resp => {
            console.warn(resp);
            console.warn('3 =========<');
        });
        
        func().then(cb).then(resp => {
            console.warn(resp);
            console.warn('4 =========<');
        });
    //     move(n, a, c)
    //     .then(function (aCoord) {
    //         return new Promise(function (resolve, reject) {
    //             console.log('Promise2 start');
    //             var num3 = c.name.charCodeAt() - a.name.charCodeAt();
    //             var upRow = aCoord.X + num3 * 600;
    //             for (let i = 0; i < 1000; i++) {
    //                 if (aCoord.X == upRow) {
    //                     console.log('Promise2 end');
    //                     setTimeout(resolve, 1500, aCoord);
    //                     break;
    //                 } else {
    //                     ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
    //                     ctx.fillRect(aCoord.X + 5 * num3, aCoord.Y, aCoord.W, aCoord.H);
    //                     aCoord.X += 5 * num3
    //                 }
    //             }
    //         });

    //     })
    //     .then(function (aCoord) {
    //         console.log('Promise3 start');
    //         var num2 = c.list.length;
    //         var updown = 800 - (num2 + 1) * 100;;
    //         for (let i = 0; i < 1000; i++) {
    //             if (aCoord.Y == updown) {
    //                 console.log('Promise3 end');
    //                 break;
    //             } else {
    //                 ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
    //                 ctx.fillRect(aCoord.X, aCoord.Y + 5, aCoord.W, aCoord.H);
    //                 aCoord.Y += 5
    //             }
    //         }   
    //     c.list.push(a.list.pop())             
    //     })
    //     .catch(function(){
    //         console.log(12);
            
    //     })
    // ;
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

    return new Promise(function (resolve, reject) {
        console.log('Promise1 start');
        for (let i = 0; i < 1000; i++) {
            if (aCoord.Y <= upY) {
            setTimeout(resolve, 1500, aCoord);
            console.log('Promise1 end');
            break;
        } else {
            ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
            ctx.fillRect(aCoord.X, aCoord.Y - 50, aCoord.W, aCoord.H);
            aCoord.Y -= 50;
        }
        }
        // var time = setInterval(function () {
        //     if (aCoord.Y == upY) {
        //         setTimeout(resolve, 500, aCoord);
        //         clearInterval(time);
        //         console.log('Promise1 end');
        //     } else {
        //         ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
        //         ctx.fillRect(aCoord.X, aCoord.Y - 5, aCoord.W, aCoord.H);
        //         aCoord.Y -= 5;
        //     }
        // }, 1);

    })
    //     .then(function (aCoord) {
    //         return new Promise(function (resolve, reject) {
    //             console.log('Promise2 start');
    //             var num3 = c.name.charCodeAt() - a.name.charCodeAt();
    //             var upRow = aCoord.X + num3 * 600;
    //             for (let i = 0; i < 1000; i++) {
    //                 if (aCoord.X == upRow) {
    //                     console.log('Promise2 end');
    //                     setTimeout(resolve, 1500, aCoord);
    //                     break;
    //                 } else {
    //                     ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
    //                     ctx.fillRect(aCoord.X + 5 * num3, aCoord.Y, aCoord.W, aCoord.H);
    //                     aCoord.X += 5 * num3
    //                 }
    //             }

    //             // var time2 = setInterval(function () {
    //             //     if (aCoord.X == upRow) {
    //             //         console.log('Promise2 end');
    //             //         clearInterval(time2);
    //             //         setTimeout(resolve, 500, aCoord);
                        
    //             //     } else {
    //             //         ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
    //             //         ctx.fillRect(aCoord.X + 5 * num3, aCoord.Y, aCoord.W, aCoord.H);
    //             //         aCoord.X += 5 * num3
    //             //     }
    //             // }, 1);
    //         });

    //     })
    //     .then(function (aCoord) {
    //         console.log('Promise3 start');
    //         var updown = 800 - (num2 + 1) * 100;;
    //         for (let i = 0; i < 1000; i++) {
    //             if (aCoord.Y == updown) {
    //                 console.log('Promise3 end');
    //                 break;
    //             } else {
    //                 ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
    //                 ctx.fillRect(aCoord.X, aCoord.Y + 5, aCoord.W, aCoord.H);
    //                 aCoord.Y += 5
    //             }
    //         }
    //         // if (aCoord != undefined) {
                
    //         //     var time3 = setInterval(function () {
    //         //         if (aCoord.Y == updown) {
    //         //             console.log('Promise3 end');
    //         //             clearInterval(time3);
    //         //         } else {
    //         //             ctx.clearRect(aCoord.X, aCoord.Y, aCoord.W, aCoord.H);
    //         //             ctx.fillRect(aCoord.X, aCoord.Y + 5, aCoord.W, aCoord.H);
    //         //             aCoord.Y += 5
    //         //         }
    //         //     }, 1);
    //         // }
         
    //     })
        
    // c.list.push(a.list.pop())   
}
// var movePromise = new Promise(function (resolve, reject) {
//     console.log('start mew Promise...');
//     var num1 = a.list.length;
//     var Coord = a.list[num1 - 1];

//     resolve(Coord);
// })
