function generateReport() {
    let inputElements = Array.from(document.getElementsByTagName('input'));
    let tableRows = Array.from(document.getElementsByTagName('tr'));

    const resultArr = [];
    const checkedCols = [];

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const obj = {};

        for (let j = 0; j < row.children.length; j++) {
            const element = row.children[j];

            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(j);
                }
                continue;
            }

            if (checkedCols.includes(j)) {
                let propertyName = inputElements[j].name;
                obj[propertyName] = element.textContent;
            }
        }

        if (i != 0) {
            resultArr.push(obj);
        }
    }

    document.getElementById("output").value = JSON.stringify(resultArr);
}