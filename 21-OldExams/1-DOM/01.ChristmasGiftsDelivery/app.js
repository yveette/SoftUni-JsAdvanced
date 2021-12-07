function solution() {
 
    let input = document.querySelector('input');
    let addButton = document.querySelector('button');
    let gifts = document.querySelector('.container > section:nth-of-type(2) ul');
    let sentGifts = document.querySelector('.container > section:nth-of-type(3) ul');
    let discardedGifts = document.querySelector('.container > section:nth-of-type(4) ul');
 
    addButton.addEventListener('click', addGift);
 
    function addGift() {
 
        if (input.value.trim()) {
 
            let sendButton = document.createElement('button');
            sendButton.setAttribute('id', 'sendButton');
            sendButton.textContent = 'Send';
 
            let discardButton = document.createElement('button');
            discardButton.setAttribute('id', 'discardButton');
            discardButton.textContent = 'Discard';
 
            let item = document.createElement('li');
            item.setAttribute('class', 'gift');
            item.textContent = input.value;
            item.appendChild(sendButton);
            item.appendChild(discardButton);
 
            gifts.appendChild(item);
 
            // sort gifts alphabetically
            Array.from(gifts.querySelectorAll('li'))
                .sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(item => gifts.appendChild(item));
 
            input.value = null;
 
            [sendButton, discardButton].forEach(btn => btn.addEventListener('click', manageGifts));
        }
    }
 
    function manageGifts(btn) {
 
        let item = btn.target.parentNode;
        item.lastElementChild.remove();
        item.lastElementChild.remove();
 
        if (btn.target.textContent === 'Send') {
            sentGifts.appendChild(item);
        } else {
            discardedGifts.appendChild(item);
        }
    }
}


// function solution() {
//     const addBtn = document.querySelector('button');
//     const giftList = document.querySelector('.card:nth-child(2) ul');
//     const sendList = document.querySelector('.card:nth-child(3) ul');
//     const discardedList = document.querySelector('.card:nth-child(4) ul');

//     addBtn.addEventListener('click', onAdd);

//     function onAdd(ev) {
//         ev.preventDefault();
//         const input = document.querySelector('input');

//         const gift = input.value.trim();
//         if (gift) {
//             const sendBtn = document.createElement('button');
//             sendBtn.setAttribute('id', 'sendButton');
//             sendBtn.textContent = 'Send';
//             sendBtn.addEventListener('click', onSend.bind(null, giftEL));
            
//             const discardBtn = e('button', { id: 'discardButton' }, 'Discard');
//             discardBtn.addEventListener('click', onDiscard.bind(null, giftEL));
            
//             // e('li', {className: 'gift'}, gift)
//             const giftEL = document.createElement('li')
//             giftEL.classList.add('gift');
//             giftEL.textContent = gift;
//             giftEL.appendChild(sendBtn);
//             giftEL.appendChild(discardBtn);

//             giftList.appendChild(giftEL);
//             // sorting list
//             Array.from(giftList.querySelectorAll('li'))
//                 .sort((a, b) => a.textContent.localeCompare(b.textContent))
//                 .forEach(item => giftList.appendChild(item))
//             input.value = '';
//         }

//     }

//     function onSend(giftEL) {
//         giftEL.querySelectorAll('button').forEach(el => el.remove());
//         sendList.appendChild(giftEL);
//     }

//     function onDiscard(giftEL) {
//         giftEL.querySelectorAll('button').forEach(el => el.remove());
//         discardedList.appendChild(giftEL);
//     }

//     function e(type, attr, ...content) {
//         const element = document.createElement(type);
//         for (let prop in attr) {
//             element[prop] = attr[prop];
//         }
//         for (let item of content) {
//             if (typeof item == 'string' || typeof item == 'number') {
//                 item = document.createTextNode(item);
//             }
//             element.appendChild(item);
//         }

//         return element;
//     }
// }

