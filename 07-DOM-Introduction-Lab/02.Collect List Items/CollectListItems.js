function extractText() {
    const items = document.getElementById('items').children;

    const result = [];

    for (const item of Array.from(items)) {
        result.push(item.textContent);
    }

    document.getElementById('result').textContent = result.join('\n');

    // or 
    // const result = [...items].map(el => el.textContent).join('\n');
    // document.getElementById('result').value = result;
}