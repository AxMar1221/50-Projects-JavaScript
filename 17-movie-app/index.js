window.addEventListener('load', () => {
    console.log('what movies')
});

const API_KEY = 'd4f79424be15f01bff43a1a62ab4ad83'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${ API_KEY }&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${ API_KEY }&query="`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies( url ) {
    const resp = await fetch( url );
    const data = await resp.json();
    console.log(data.results);

    showMovies( data.results );
}

function showMovies( movies ) {
    main.innerHTML = '';

    movies.forEach(( movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path }" alt="${ title }">
        <div class="movie-info">
            <h3> ${ title } </h3>
            <span class="${getClassByRate(vote_average)}">${ vote_average }</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${ overview }
        </div>
        `
       main.appendChild( movieElement ) ;
    });
}

function getClassByRate( vote ) {
    if ( vote >= 8 ){
        return 'green';
    } else if ( vote >= 5 ) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', ( eve ) => {
    eve.preventDefault();

    const searchTerm = search.value;
    
    if ( searchTerm &&  searchTerm !== '' ) {
        getMovies( SEARCH_API + searchTerm );

        search.value = '';
    } else {
        window.location.reload()
    }
})

setInterval('location.reload()', 600000 );