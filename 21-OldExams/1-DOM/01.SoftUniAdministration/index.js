function solve() {
    let modules = {};
    const addBtn = document.querySelector('.admin-view .action button');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameEl = document.querySelector('input[name="lecture-name"]');
        let lectureDateEl = document.querySelector('input[name="lecture-date"]');
        let lectureModuleEl = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameEl.value || !lectureDateEl.value || lectureModuleEl.value == 'Select module') {
            return;
        }

        if (!modules[lectureModuleEl.value]) {
            modules[lectureModuleEl.value] = []
        }
        let currLecture = {
            name: lectureNameEl.value,
            date: formatDate(lectureDateEl.value)
        }
        modules[lectureModuleEl.value].push(currLecture);

        lectureNameEl.value = '';
        lectureDateEl.value = '';
        lectureModuleEl.value = '';
        createTrainings(modules);
    });

    function createTrainings(modules) {
        let modulesElement = document.querySelector('.modules');
        // modulesElement.replaceChildren();
        modulesElement.innerHTML ='';
        for (const moduleName in modules) {
            let moduleEl = createModule(moduleName);
            let lectureListEl = document.createElement('ul');

            let lectures = modules[moduleName];
            lectures
                .sort((a, b) => a.date.localeCompare(b.date))
                .forEach(({ name, date }) => {
                    let lectureEl = createLecture(name, date);
                    lectureListEl.appendChild(lectureEl);

                    let delBtntEl = lectureEl.querySelector('button');
                    delBtntEl.addEventListener('click', (e) => {
                        modules[moduleName] = modules[moduleName]
                            .filter(x => !(x.name == name && x.date == date))

                        if (modules[moduleName].length == 0) {
                            delete modules[moduleName];
                            // e.currentTarget.parentElement.parentElement.parentElement.remove();
                            e.currentTarget.closest('.module').remove();
                        } else {
                            e.currentTarget.parentElement.remove();
                        }
                    })
                });

            moduleEl.appendChild(lectureListEl);
            modulesElement.appendChild(moduleEl);
        }
    }

    function createModule(name) {
        let divEl = document.createElement('div');
        divEl.classList.add('module');

        let headingEL = document.createElement('h3');
        headingEL.textContent = `${name.toUpperCase()}-MODULE`;

        divEl.appendChild(headingEL);

        return divEl;
    }

    function createLecture(name, date) {
        const liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingEl = document.createElement('h4');
        courseHeadingEl.textContent = `${name} - ${date}`;

        let delBtn = document.createElement('button');
        delBtn.classList.add('red');
        delBtn.textContent = 'Del';

        liElement.appendChild(courseHeadingEl);
        liElement.appendChild(delBtn);

        return liElement;
    }

    function formatDate(dateInput) {
        // 2021-07-15T07:25 -> regex
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }
};


/*const modules = document.querySelector('.modules');
    const form = document.querySelector('form');
    form.addEventListener('submit', onAdd);

    function onAdd(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const lecture = formData.get('lecture-name');
        const date = formData.get('lecture-date');
        const module = formData.get('lecture-module');

        if (lecture == '' || date == '' || module == '' || module == 'Select module') {
            return;
        }

        const delBtn = e('button', {className:'red'}, 'Del');
        delBtn.addEventListener('click', onDelete);

        const el = e('div', {className: 'module'},
            e('h3',{}, `${module.toUpperCase()}-MODULE`),
            e('ul',{},
                e('li', {className:'flex'},
                    e('h4', {}, `${lecture} - ${date}`),
                    delBtn
                )
            )
        )

        modules.appendChild(el);
        ev.target.reset();
    }

    function onDelete(){
        console.log('delete')
    }
*/