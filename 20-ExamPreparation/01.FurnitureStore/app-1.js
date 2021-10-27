window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);
    function onAdd(ev) {
        ev.preventDefault();
        if (model.value != "" && description.value != "" && year.value > 0 && price.value > 0) {
            const tableBody = document.querySelector('#furniture-list');
            const itemVisible = e('tr', { class: 'info' },
                e('td', {}, `${model.value}`),
                e('td', {}, `${(price.value)}`),
                e('td', {},
                    e('button', { class: "moreBtn" }, 'More Info'),
                    e('button', { class: "buyBtn" }, 'Buy it')));
            const itemInvisible = e('tr', { class: "hide" },
                e('td', {}, `Year: ${year.value}`),
                e('td', { colspan: 3 }, `Description: ${description.value}`));
            tableBody.appendChild(itemVisible);
            tableBody.appendChild(itemInvisible);



            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';
        }
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
