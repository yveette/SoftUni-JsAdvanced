window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const songField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    let totalLikes = 0;

    addBtn.addEventListener('click', addHandler);

    function addHandler(event) {
        event.preventDefault();
        const genre = genreField.value;
        const song = songField.value;
        const author = authorField.value;
        const date = dateField.value;

        if (genre === '' || song === '' || author === '' || date === '') {
            return;
        }

        genreField.value = '';
        songField.value = '';
        authorField.value = '';
        dateField.value = '';

        const divAllHits = document.querySelector('.all-hits-container');
        const saveBtn = e('button', { className: 'save-btn' }, 'Save song');
        const likeBtn = e('button', { className: 'like-btn' }, 'Like song');
        const deleteBtn = e('button', { className: 'delete-btn' }, 'Delete');

        const div = e('div', { className: 'hits-info' },
            e('img', { src: './static/img/img.png' }),
            e('h2', {}, `Genre: ${genre}`),
            e('h2', {}, `Name: ${song}`),
            e('h2', {}, `Author: ${author}`),
            e('h3', {}, `Date: ${date}`),
            saveBtn,
            likeBtn,
            deleteBtn
        );

        divAllHits.appendChild(div);

        likeBtn.addEventListener('click', () => {
            totalLikes += 1;
            likeBtn.disabled = true;
            let likesCounter = document.querySelector('#total-likes p');
            likesCounter.textContent = `Total Likes: ${totalLikes}`;
        });

        saveBtn.addEventListener('click', () => {
            const divSavedHit = document.querySelector('.saved-container');
            divSavedHit.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        });

        deleteBtn.addEventListener('click', () => {
            div.remove();
        });
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