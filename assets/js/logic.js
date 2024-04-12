let username = document.querySelector('#userName');
let title = document.querySelector('#title');
let content = document.querySelector('#content');
let submit = document.getElementById('submit');
let warning = document.getElementById('warningMessage');
let message;


//Local storage for main blog page 

let myPosts = JSON.parse(localStorage.getItem('myPosts')) || [];

submit.addEventListener('click', function (event) {

    event.preventDefault();

    console.log(content);

    //Warning Message when user leaves input null
    if ((username.value === null || username.value === '') || (title.value === null || title.value === '')) {

        warning.textContent = 'Fill out the form';
        message = setTimeout(function () {

            warning.textContent = '';

        }, 5000)
    } else if (content.value === null || content.value.trim() === '') {

        warning.textContent = 'Fill out the form';
        message = setTimeout(function () {

            warning.textContent = '';
        }, 5000)
    } else {

        let post = {

            name: username.value,
            title: title.value,
            content: content.value
        }
        console.log(post);

        myPosts.push(post);
        localStorage.setItem('myPosts', JSON.stringify(myPosts));

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

submit.addEventListener('click', function () {

    document.querySelector('form').reset()

});