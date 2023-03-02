window.addEventListener('load', () => {
    console.log('Window loaded')
});

const labels = document.querySelectorAll('.form-control label')

labels.forEach( label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
});

setInterval('location.reload()', 60000 );