window.addEventListener('load', () => {
    console.log('Window loaded')
});

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes );

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 2 * 1

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top

        if ( boxTop < triggerBottom ) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

setInterval('location.reload()', 60000 );