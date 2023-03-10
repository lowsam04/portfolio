let projectData = [
    {
        image: 'img/Project1.png',
        name: 'To Do List',
        detail: 'A Minimal Todo List App with Pure JavaScript and LocalStorage',
        github: 'https://github.com/lowsam04/Todo_List_Pure_JS_LocalStorage',
        live: 'https://lowsam04.github.io/Todo_List_Pure_JS_LocalStorage/',
        tags: '#javascript, #html, #css'
    },
    {
        image: 'img/Project2.png',
        name: 'Weather App',
        detail: 'A simple weather app with fetch api',
        github: 'https://github.com/lowsam04/weather-app-js',
        live: 'https://lowsam04.github.io/weather-app-js/',
        tags: '#javascript, #css,#html,#api'
    },
    {
        image: 'img/Project3.png',
        name: 'Sign Up Form',
        detail: 'A simple sign up form made by pure css and html',
        github: 'https://github.com/lowsam04/sign-up-form',
        live: 'https://lowsam04.github.io/sign-up-form/',
        tags: '#html,#css,#javascript'
    },
    {
        image: 'img/library-js.png',
        name: 'Library App',
        detail: 'A smal Library app build with html/css, javascript.',
        github: 'https://github.com/lowsam04/js-library-app',
        live: 'https://lowsam04.github.io/js-library-app/',
        tags: '#html,#css,#javascript'
    },
    {
        image: 'img/tictactoe-js.png',
        name: 'Tic Tac Toe-JS',
        detail: 'A Tic Tac Toe game made by javascript, html and css.',
        github: 'https://github.com/lowsam04/js-tic-tac-toe',
        live: 'https://lowsam04.github.io/js-tic-tac-toe/',
        tags: '#html,#css,#javascript'
    },
    {
        image: 'img/tailwind.png',
        name: 'Tailwind CSS-single page',
        detail: 'An Education webpage made by Tailwind css.',
        github: 'https://github.com/lowsam04/tailwind-single-page',
        live: 'https://tailwind-single-page.onrender.com/',
        tags: '#html,#css,#javascript,#tailwind'
    },
]

// creating project cards in frontend
const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" target="_blank" class="btn">Github</a>
                        <a href="${data.live}" target="_blank" class="btn">See live</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectCards(data));
