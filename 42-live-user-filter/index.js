window.addEventListener('load', () => {
    console.log('window loaded');
});

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData()

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const resp = await fetch('https://randomuser.me/api?results=50')

    const { results } = await resp.json();
    console.log(results)

    result.innerHTML = '';

    results.forEach( user => {
        const li = document.createElement('li');

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} ${user.location.country}</p>
            </div>`

        result.appendChild(li);
    });
}

function filterData( serachTerm) {
    listItems.forEach( item => {
        if ( item.innerText.toLowerCase().includes(serachTerm.toLowerCase())) {
            item.classList.remove('hide') 
        } else {
            item.classList.add('hide')
        }
    });
}