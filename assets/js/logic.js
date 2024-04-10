const userInput = document.querySelector('#userName');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('submit');
const warningMessage = document.getElementById('warningMessage');
let message;

const allPost = JSON.parse(localStorage.getItem('allPost')) || [];

submitButton.addEventListener('click', function (event) {

    event.preventDefault();

    console.log(userContent);
    if ((userInput.value === null || userInput.value === '') || (userTitle.value === null || userTitle.value === '')) {

        warningMessage.textContent = 'Fill out the form';
        message = setTimeout(function () {

            warningMessage.textContent = '';

        }, 5000)
    } else if (userContent.value === null || userContent.value.trim() === '') {

        warningMessage.textContent = 'Fill out the form';
        message = setTimeout(function () {

            warningMessage.textContent = '';
        }, 5000)
    } else {

        const userPost = {

            name: userInput.value,
            title: userTitle.value,
            content: userContent.value
        }
        console.log(userPost);

        allPost.push(userPost);
        localStorage.setItem('allPost', JSON.stringify(allPost));

        reDirect();
    }
});

function darkMode() {

    let mode = document.body;
    mode.classList.toggle('darkMode');
}

function reDirect() {

    location.replace('blog.html')
}

submitButton.addEventListener('click', function () {

    document.querySelector('form').reset()

});