function subtract() {
    const first = Number(document.getElementById('firstNumber').value);
    const second = Number(document.getElementById('secondNumber').value);

    let result = document.getElementById('result');

    result.innerHTML = (first - second).toString();
}