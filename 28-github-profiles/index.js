window.addEventListener('load', () => {
    console.log('show profiles');
});

const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser( username ) {
    try {
        const { data } = await axios(API_URL + username );
        console.log(data)
        createUserCard( data );
        getRepos( username );
    } catch( err ) {
        if ( err.response.status == 404 ) {

            creteErrorCard('Profile not found')
        }
    }
}

async function getRepos( username ) {
    try {
        const { data } = await axios( API_URL + username + '/repos?sort=created');
        console.log(data)
        addReposToCard( data );
    } catch( err ) {
        createUserCard('Problem fetching repos')
    }
}

function createUserCard( user ) {
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${ user.bio}</p>` : '';
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${ user.avatar_url }" alt="${ user.name}" class="avatar">
        </div>
        <div class="user-info">
        <h2>${ userID }</h2>
            ${ userBio }
        <h4> 
            User since
            ${ user.created_at.slice(0,10)}
            </br>
            ID
            ${ user.id }
        </h4>
        </div>
            <ul>
                <il>${ user.followers } <strong>Followers</strong></il>
                <il>${ user.following } <strong>Following</strong></il>
                <il>${ user.public_repos } <strong>Repos</strong></il>
            </ul>

        <div id="repos"></div>
    </div>`

    main.innerHTML = cardHTML;
    console.log(user)
}

function creteErrorCard( msg ) {
    const cardHTML = `
    <div class="card">
    <h1> ${ msg } </h1>
    </div>
    `

    main.innerHTML = cardHTML;
}

function addReposToCard( repos ) {
    const reposEle = document.getElementById('repos');

    repos
        .slice(0 ,5)
        .forEach( repo => {
            const repoEle = document.createElement('a');
            repoEle.classList.add('repo');
            repoEle.href = repo.html_url;
            repoEle.target = '_blank';
            repoEle.innerText = repo.name;

            reposEle.appendChild( repoEle );
        })
}

form.addEventListener('submit', (eve ) => {
    eve.preventDefault()

    const user = search.value;

    if ( user ) {
        getUser( user )

        search.vale = '';
    }
});