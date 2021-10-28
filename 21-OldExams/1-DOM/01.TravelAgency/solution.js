window.addEventListener('load', solution);

function solution() {
    const fnameField = document.getElementById("fname");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const addressField = document.getElementById("address");
    const pcodeField = document.getElementById("code");

    const submitBTN = document.getElementById("submitBTN");
    submitBTN.addEventListener('click', onSubmit);

    const listPreview = document.getElementById("infoPreview")
    const editBTN = document.getElementById("editBTN");
    const continueBTN = document.getElementById("continueBTN");

    let info = {};

    function onSubmit() {
        if (!fnameField.value || !emailField.value) {
            return;
        }

        info.fname = fnameField.value;
        info.email = emailField.value;
        info.phone = phoneField.value;
        info.address = addressField.value;
        info.pcode = pcodeField.value;

        const fnameAdd = createEl('li', {}, `Full Name: ${info.fname}`);
        listPreview.appendChild(fnameAdd);
        const emailAdd = createEl('li', {}, `Email: ${info.email}`);
        listPreview.appendChild(emailAdd);

        if (phoneField.value) {
            const phoneAdd = createEl('li', {}, `Phone Number: ${phoneField.value}`);
            listPreview.appendChild(phoneAdd);
        }
        if (addressField.value) {
            const addressAdd = createEl('li', {}, `Address: ${addressField.value}`);
            listPreview.appendChild(addressAdd);
        }
        if (pcodeField.value) {
            const pcodeAdd = createEl('li', {}, `Postal Code: ${pcodeField.value}`);
            listPreview.appendChild(pcodeAdd);
        }

        fnameField.value = "";
        emailField.value = "";
        phoneField.value = "";
        addressField.value = "";
        pcodeField.value = "";

        submitBTN.setAttribute('disabled', 'true');
        editBTN.removeAttribute('disabled');
        continueBTN.removeAttribute('disabled');

        editBTN.addEventListener('click', onEdit);
        continueBTN.addEventListener('click', onContinue);
    }

    function onEdit() {
        fnameField.value = info.fname;
        emailField.value = info.email;
        phoneField.value = info.phone;
        addressField.value = info.address;
        pcodeField.value = info.pcode;

        let list = document.querySelector('#infoPreview');
        list.innerHTML = '';

        submitBTN.removeAttribute('disabled');
        editBTN.setAttribute('disabled', 'true');
        continueBTN.setAttribute('disabled', 'true');
    }

    function onContinue() {
        let allInfo = document.querySelector('#block');
        allInfo.innerHTML = '';

        let message = createEl('h3', {}, "Thank you for your reservation!");
        allInfo.appendChild(message);
    }

    function createEl(type, attr, ...content) {
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