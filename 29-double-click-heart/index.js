window.addEventListener('load', ()=> {
    console.log('feel the beat');
});

const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', ( eve ) => {
    if ( clickTime === 0 ) {
        clickTime = new Date().getTime()
    } else {
        if (( new Date().getTime() - clickTime ) < 800 ) {
            createHeart( eve );
            clickTime = 0;
        } else {
            clickTime = new Date().getTime()
        }
    }
});

const createHeart = ( eve ) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fas-heart');

    const x = eve.clientX;
    const y = eve.clientY;

    const leftOffset = eve.target.offsetLeft;
    const topOffset = eve.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild( heart );

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000 );

}

setInterval('location.reload()', 60000 );