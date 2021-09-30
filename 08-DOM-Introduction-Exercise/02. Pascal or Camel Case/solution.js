function solve() {
    const text = document.getElementById("text").value;
    const naming = document.getElementById("naming-convention").value;
    const resultContainer = document.getElementById("result");

    const splitted = text.split(' ');

    let resultStr = '';

    if (naming == "Pascal Case") {
        for (let i = 0; i < splitted.length; i++) {
            resultStr += splitted[i][0].toUpperCase() +
                splitted[i].substring(1, splitted[i].length).toLowerCase();
        }
        resultContainer.textContent = resultStr;
    } else if (naming == "Camel Case") {
        resultStr += splitted[0][0].toLowerCase() +
            splitted[0].substring(1, splitted[0].length).toLowerCase();

        for (let i = 1; i < splitted.length; i++) {
            resultStr += splitted[i][0].toUpperCase() +
                splitted[i].substring(1, splitted[i].length).toLowerCase();
        }
        resultContainer.textContent = resultStr;
    } else {
        resultContainer.textContent = "Error!"
    }
}