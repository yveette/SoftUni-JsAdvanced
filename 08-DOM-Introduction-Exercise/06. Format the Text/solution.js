function solve() {
    const text = document.getElementById("input").value;
    const splittedText = text.split(".").filter((el) => el != '');
    const output = document.getElementById("output");

    for (let i = 0; i < splittedText.length; i += 3) {
        let arr = [];
        for (let j = 0; j < 3; j++) {
            if (splittedText[i + j]) {
                arr.push(splittedText[i + j])
            }
        }

        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
}