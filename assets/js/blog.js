// information from main page's form
const display = function () {

    let mainPage = localStorage.getItem('myPosts');
    let secondPage = JSON.parse(mainPage) || [];
    let article = document.querySelector('.article')

    for (i = 0; i < secondPage.length; i++) {


        let author = document.createElement('h2');
        let title = document.createElement('h1');
        let div = document.createElement('div');
        let content = document.createElement('p');


        author.textContent = secondPage[i].name;
        title.textContent = secondPage[i].title;
        content.textContent = secondPage[i].content;


        // Content order on second page's 'article' area 
        author.setAttribute('class', 'username');
        content.setAttribute('class', 'content');
        title.setAttribute('class', 'title');

        div.append(title);
        div.append(content);
        div.append(author);

        article.append(div);
    };

    console.log(secondPage);
    console.log(article);

}

display();

//to engage Dark mode function on second page
function darkMode() {

    let mode = document.body;
    mode.classList.toggle('darkMode');
}