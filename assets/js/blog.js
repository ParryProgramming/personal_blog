const displayNewPost = function () {

    const stringContent = localStorage.getItem('allPost');
    const newContent = JSON.parse(stringContent) || [];
    const articleContainer = document.querySelector('.article')
    for (i = 0; i < newContent.length; i++) {

        let div = document.createElement('div');
        let title = document.createElement('h1');
        let content = document.createElement('p');
        let author = document.createElement('h2');

        author.textContent = newContent[i].name;
        title.textContent = newContent[i].title;
        content.textContent = newContent[i].content;

        author.setAttribute('class', 'username');
        title.setAttribute('class', 'title');
        content.setAttribute('class', 'content');

        div.append(title);
        div.append(content);
        div.append(author);

        articleContainer.append(div);
    };

    console.log(newContent);
    console.log(articleContainer);

}

displayNewPost();

function darkMode() {

    let mode = document.body;
    mode.classList.toggle('darkMode');
}