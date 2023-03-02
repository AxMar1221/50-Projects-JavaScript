window.addEventListener('load', () => {
    console.log('lets navigate!!');
});

const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if ( window.scrollY > nav.offsetHeight + 150 ) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

setInterval('location.reload()', 600000 );