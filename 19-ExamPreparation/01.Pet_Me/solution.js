function solve() {
    const fields = document.querySelectorAll("#container input");
    // or --> = Array.from(document.querySelectorAll("#container input"))
    // const [name,age,kind, currOwner]  = fields.map(f => f.value.trim())
    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        currOwner: fields[3]
    }
    const addBtn = document.querySelector("#container button");
    const petList = document.querySelector("#adoption ul");
    const adoptedList = document.querySelector("#adopted ul");

    addBtn.addEventListener('click', addPet);
    function addPet(ev) {
        ev.preventDefault(); // because of form section in html page is refreshing
        const name = input.name.value.trim();
        const age = Number(input.age.value);
        const kind = input.kind.value;
        const currOwner = input.currOwner.value;

        if (name != "" && age != "" &&
            kind != "" && currOwner != "" && !isNaN(age)) {

            // const liEl = document.createElement('li');
            // liEl.innerHTML =
            //     `<p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p>
            //     <span>Owner: ${currOwner}</span>
            //     <button>Contact with owner</button>`;

            // contactBtn.addEventListener('click', onContact);
            // petList.appendChild(liEl);

            const contactBtn = e('button', {}, 'Contact with owner');
            const pet = e('li', {},
                e('p', {},
                    e('strong', {}, name),
                    ' is a ',
                    e('strong', {}, age),
                    ' year old ',
                    e('strong', {}, kind),
                ),
                e('span', {}, `Owner: ${currOwner}`),
                contactBtn
            );
            contactBtn.addEventListener('click', onContact);
            petList.appendChild(pet);

            input.name.value = '';
            input.age.value = '';
            input.kind.value = '';
            input.currOwner.value = '';
            // or --> Array.from(fields).forEach(f => f.value = '');
            // or --> fields.reset();

            function onContact() {
                // contactBtn.remove();
                // const divEL = document.createElement('div');
                // divEL.innerHTML =
                //     `<input placeholder="Enter your names><button>Yes! I take it!</button>`
                // liEl.appendChild(divEL)

                const confirmInput = e('input', { placeholder: "Enter your names" });
                const confirmBtn = e('button', {}, 'Yes! I take it!');
                const confirmDiv = e('div', {},
                    confirmInput,
                    confirmBtn
                );

                confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));
                contactBtn.remove();
                pet.appendChild(confirmDiv);
            }
        }
    }

    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (input.value.trim() == '') {
            return;
            //early exit
        }

        const checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet));

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        // move to new section and delete from old
        adoptedList.appendChild(pet);
    }

    function check(pet) {
        pet.remove();
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