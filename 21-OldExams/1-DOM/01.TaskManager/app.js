function solve() {
    const [first, openSec, progressSec, completeSec] = document.querySelectorAll('.wrapper section');
    const openList = openSec.children[1];
    const progressList = progressSec.children[1];
    const completeList = completeSec.children[1];

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);

    function onAdd(ev) {
        ev.preventDefault();

        const taskField = document.getElementById('task');
        const descriptionField = document.getElementById('description');
        const dateField = document.getElementById('date');

        const task = taskField.value;
        const description= descriptionField.value;
        const date= dateField.value;

        if (task == '' || description == '' || date == '') {
            return;
        }

        const starBtn = e('button', { className: 'green' }, 'Start');
        starBtn.addEventListener('click', onStart);

        const delBtn = e('button', { className: 'red' }, 'Delete');
        delBtn.addEventListener('click', onDelete);

        const articleEl = e('article', {},
            e('h3', {}, task),
            e('p', {}, `Description: ${description}`),
            e('p', {}, `Due Date: ${date}`),
            e('div', { className: 'flex' },
                starBtn,
                delBtn
            )
        )


        openList.appendChild(articleEl);
        taskField.value = '';
        descriptionField.value = '';
        dateField.value = '';
    }

    function onStart(ev) {
        const btns = ev.target.parentElement;
        btns.querySelector('button').remove();

        const finishBtn = e('button', { className: 'orange' }, 'Finish');
        btns.appendChild(finishBtn);
        finishBtn.addEventListener('click', onFinish);

        const article = btns.parentElement;
        progressList.appendChild(article);
    }

    function onFinish(ev) {
        const article = ev.target.parentElement.parentElement;
        article.querySelector('.flex').remove();
        completeList.appendChild(article);
    }

    function onDelete(ev) {
        const article = ev.target.parentElement.parentElement;
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