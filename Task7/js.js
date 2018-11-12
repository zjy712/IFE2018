var Canvas = document.getElementById('myCanvas');
var ctx = Canvas.getContext('2d');
var img = new Image();
img.src = './images/no_bind.png';
var img2 = new Image();
img2.src = './images/online_status1.png';
var img3 = new Image();
img3.src = './images/selected.png'
var img4 = new Image();
img4.src = './images/online_status0.png'

var row = 40;
var col = 15;
var chairdata = [];
var intervalX = 29.5 + 18;
var intervalY = 29.5 + 40;
var imgWidth = 29.5;
var imgHeight = 29.5;


for (let i = 0; i < row; i++) {
    chairdata[i] = new Array();
    for (let j = 0; j < col; j++) {
        chairdata[i][j] = 0;
    }
}

var c_initchair = function (i, j) {
    var initchair = {};                        //初始化空椅子对象
    initchair.row = i;                         //排
    initchair.col = j;                        //列 座
    initchair.status = 0;                      //绑定，未绑定状态 0，1：未绑定 2：已绑定账号  3：已绑定区域
    initchair.online_status = 0;               // 0：不在线 1：在线
    initchair.w_status = 0;                    // 0：设备不在运行中 1：设备运行中
    initchair.e_starus = 0;                    // 0:没有异常 1：表示异常
    initchair.m_status = 1;                    // 0:禁止使用 1：允许使用
    initchair.runtime = 0;                    // 设备运行总秒数
    initchair.u_status = 0;                   //座位上是否有人 0：没有人 1：有人
    initchair.granttime = '';                  // 最后一个订单用户授权的到期时间
    initchair.online_flag = '';                  // 最后在线时间 ltime
    initchair.prname = '';          //设备名字
    initchair.rc_name = i + '-' + j;             // 暂时标记 排列名字

    initchair.select = 0
    return initchair;
}


img.onload = function () {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            var initchair = c_initchair(i + 1, j + 1);
            // chairdata.push(initchair);
            chairdata[i][j] = initchair;
            ctx.drawImage(img4, i * intervalX, j * intervalY, imgHeight, imgWidth);
        }
    }

    // ctx.drawImage(img,200,200);
}
var selectChairdata = {};
document.getElementById('myCanvas').onclick = function (e) {
    
    console.log(e.layerX, e.layerY);
    var x = e.layerX;
    var y = e.layerY;
    var row = parseInt(e.layerX / (intervalX));
    var col = parseInt(e.layerY / (intervalY));

    console.log(x % intervalX, y % intervalY,selectChairdata != {});

    if ((x % intervalX) > 5.5 && (x % intervalX) < 34.5 && (y % intervalY > 11.5) && (y % intervalY) < 39.5) {
        if (selectChairdata) {
            ctx.clearRect(selectChairdata.row* intervalX , selectChairdata.col* intervalY, 40, 40)
            ctx.drawImage(img4, row * intervalX, col * intervalY, imgHeight, imgWidth);
            selectChairdata = null;
        } else {
            console.log(col + 1 + '排' + (row + 1) + '坐');
            // ctx.clearRect(row * (intervalX), col * (29.5 + 40), 29.5, 29.5)
            ctx.drawImage(img3, row * (intervalX) + 19, col * (intervalY) + 12, 15, 15);
            selectChairdata = {}
            selectChairdata.row = row;
            selectChairdata.col = col;
        }
    }
}