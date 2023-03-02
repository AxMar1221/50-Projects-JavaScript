window.addEventListener('load', () => {
    console.log('someone aks?')
});

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach( toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});


setInterval('location.reload()', 60000 );