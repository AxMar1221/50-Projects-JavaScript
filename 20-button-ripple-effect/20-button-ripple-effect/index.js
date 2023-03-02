window.addEventListener('load', () => {
    console.log('See the effect in the buttons')
});

const buttons = document.querySelectorAll('.ripple');

buttons.forEach( button => {
    button.addEventListener('click', function ( eve ) {
        const x = eve.pageX;
        const y = eve.pageY

        const buttonTop = eve.target.offsetTop;
        const buttonLeft = eve.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500 );
        console.log(button);
    });
});

setInterval('location.reload()', 60000 );