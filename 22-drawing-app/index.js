window.addEventListener('load', () => {
    console.log('drawing something')
});

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEle = document.getElementById('size');
const colorEle = document.getElementById('color');
const clearEle = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = true;
colorEle.value = 'black';
let color = colorEle.vale;
let x;
let y;

canvas.addEventListener('mousedown', (eve) => {
    isPressed = true;

    x = eve.offsetX;
    y = eve.offsetY;
});

document.addEventListener('mouseup', ( eve ) => {
    isPressed = false;

    x = undefined;
    y = undefined;

})

canvas.addEventListener('mousemove', (eve) => {
    if ( isPressed ) {
        const x2 = eve.offsetX;
        const y2 = eve.offsetY;

        drawCircle( x2, y2 );
        drawLine( x, y, x2, y2 );

        x = x2;
        y = y2;
    }
});

function drawCircle( x, y ) {
    ctx.beginPath();
    ctx.arc( x, y, size, 0, Math.PI * 2 );
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine( x1, y1, x2, y2 ) {
    ctx.beginPath();
    ctx.moveTo( x1 ,y1 );
    ctx.lineTo( x2 ,y2 );
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();

}

function updateSizeOnScreen() {
    sizeEle.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    size += 100;

    if ( size > 100 ){
        size = 100;
    }
    updateSizeOnScreen()
});

decreaseBtn.addEventListener('click', () => {
    size -= 1;
    
    if ( size < 1 ) {
        size = 1
    }

    updateSizeOnScreen()
});


colorEle.addEventListener('change', (eve) => color = eve.target.value );
clearEle.addEventListener('click', () => ctx.clearRect( 0, 0, canvas.width, canvas.height ));

setInterval('location.reload()', 600000 );