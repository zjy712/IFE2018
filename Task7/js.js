var Canvas = document.getElementById('myCanvas');
var ctx = Canvas.getContext('2d');
var img = new Image();
img.src = './images/no_bind.png';
img.width = '23px';
img.height = '23px';
img.onload = function () {
    
    for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 15; j++) {
            ctx.drawImage(img,i*100,j*100);
        }
    }

    // ctx.drawImage(img,200,200);
}