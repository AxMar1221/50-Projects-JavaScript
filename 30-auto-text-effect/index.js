window.addEventListener('load', () => {
    console.log('change text!!!');
});

const textEle = document.getElementById('text');
const speedEle = document.getElementById('speed');
const text = 'We love programing';
let idx = 1;
let speed = 300 / speedEle.value;

writeText()

function writeText() {
    textEle.innerText = text.slice( 0 ,idx );

    idx++

    if ( idx > text.length ) {
        idx = 1;
    }
    setTimeout( writeText, speed );
}

speedEle.addEventListener('input', ( eve ) => speed = 300 / eve.target.value );