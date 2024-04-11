const userInput = document.querySelector('#userName');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('submit');
const warningMessage = document.getElementById('warningMessage');
let message;


//Local storage for main blog page 

const allPost = JSON.parse(localStorage.getItem('allPost')) || [];

submitButton.addEventListener('click', function (event) {

    event.preventDefault();

    console.log(userContent);

    //Warning Message when user leaves input null
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

        userDirect();
    }
});


// to engage Dark mode function for main blog page 
function darkMode() {

    let modeButton = document.body;
    modeButton.classList.toggle('darkMode');
}

// Info goes to blog's second page when user submits it
function userDirect() {

    location.replace('blog.html')
}

//reset form on main page

submitButton.addEventListener('click', function () {

    document.querySelector('form').reset()

});