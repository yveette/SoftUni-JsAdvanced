function solve() {
    const authorField = document.getElementById('creator');
    const titleField = document.getElementById('title');
    const categoryField = document.getElementById('category');
    const contentField = document.getElementById('content');

    // not work because data is in form tag:
    /*
    const createBtn = document.getElementsByClassName("btn create");
    console.log(createBtn)
    createBtn.addEventListener('click', onCreate);
    */

    const createBtn = document.querySelector('.btn.create');
    createBtn.addEventListener('click', onCreate);

    // const form = document.querySelector('form');
    // form.addEventListener('submit', onCreate)

    function onCreate(ev) {
        ev.preventDefault();

        const author = authorField.value;
        const title = titleField.value;
        const category = categoryField.value;
        const content = contentField.value;

        if (!author || !title || !category || !content) {
            return;
        }

        // const postSection = document.querySelector('main').children[0];

        const postSection = document.querySelector('.site-content main section')

        const deleteBtn = e('button', { className: "btn delete" }, 'Delete');
        const archiveBtn = e('button', { className: "btn archive" }, 'Archive');

        const articleToAdd = e('article', {},
            e('h1', {}, title),
            e('p', {}, `Category:`, e('strong', {}, category)),
            e('p', {}, `Creator:`, e('strong', {}, author)),
            e('p', {}, content),
            e('div', { className: "buttons" },
                deleteBtn,
                archiveBtn
            )
        )
        postSection.appendChild(articleToAdd);
        
        deleteBtn.addEventListener('click', onDelete);
        archiveBtn.addEventListener('click', onArchive);

        authorField.value = '';
        titleField.value = '';
        categoryField.value = '';
        contentField.value = '';
    }

    function onArchive(ev) {
        // const article = ev.target.parentElement.parentElement;
        const article = ev.target.parentNode.parentNode;

        const header = article.querySelector('h1').textContent;

        // const archiveSection = document.querySelector('.archive-section');
        // const olList = archiveSection.querySelector('ol');

        const olList = document.querySelector('.archive-section ol');

        const li = e('li', {}, header);
        olList.appendChild(li);
        article.remove();

        Array.from(olList.children)
        .sort((a,b) =>  a.textContent.localeCompare(b.textContent))
        .forEach(element => olList.appendChild(element));
    }

    function onDelete(ev) {
        const article = ev.target.parentNode.parentNode;
        // const article = ev.target.parentElement.parentElement;
        // article.innerHTML = '';
        article.remove();
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);
        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}