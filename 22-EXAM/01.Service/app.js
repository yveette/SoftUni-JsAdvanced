window.addEventListener('load', solve);

function solve() {
    const typeField = document.getElementById('type-product');
    const descriptionField = document.getElementById('description');
    const nameField = document.getElementById('client-name');
    const phoneField = document.getElementById('client-phone');

    const receiveOrder = document.getElementById('received-orders');
    const completedOrder = document.getElementById('completed-orders');


    const sendBtn = document.querySelector('button[type="submit"]');
    sendBtn.addEventListener('click', onSend);

    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', onClear);

    function onClear(ev) {
        const clear = ev.target;
        const completed = clear.parentElement;

        const allOrders = completed.querySelectorAll('div');
        for ( let el of allOrders){
            el.remove();
        }
        // completed.replaceChildren();

        // const h2EL = e('h2', {}, 'Completed orders:');
        // const imgEl = e('img', { src: './style/img/completed-order.png' });

        // completedOrder.appendChild(h2EL);
        // completedOrder.appendChild(imgEl);
        // completedOrder.appendChild(clear);
    }

    function onSend(ev) {
        ev.preventDefault();

        const type = typeField.value;
        const description = descriptionField.value;
        const name = nameField.value;
        const phone = phoneField.value;

        if (description == '' || name == '' || phone == '') {
            return;
        }

        const startBtn = e('button', { className: 'start-btn' }, 'Start repair');
        startBtn.addEventListener('click', onRepair);

        const finishBtn = e('button', { className: 'finish-btn' }, 'Finish repair');
        finishBtn.addEventListener('click', onFinish);
        finishBtn.disabled = true;

        const divEl = e('div', { className: 'container' },
            e('h2', {}, `Product type for repair: ${type}`),
            e('h3', {}, `Client information: ${name}, ${phone}`),
            e('h4', {}, `Description of the problem: ${description}`),
            startBtn,
            finishBtn
        )

        receiveOrder.appendChild(divEl);
        descriptionField.value = '';
        nameField.value = '';
        phoneField.value = '';

    }

    function onRepair(ev) {
        const startBtn = ev.target;
        startBtn.disabled = true;
        const finishBtn = startBtn.nextSibling;
        finishBtn.disabled = false;
    }

    function onFinish(ev) {
        const finishBtn = ev.target;
        const order = finishBtn.parentElement;
        order.querySelector('.start-btn').remove();
        order.querySelector('.finish-btn').remove();
        completedOrder.appendChild(order)
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