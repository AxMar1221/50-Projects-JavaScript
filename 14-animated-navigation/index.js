window.addEventListener('load', () => {
    console.log('show the nav')
});

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('active'));

setInterval('location.reload()', 60000 );