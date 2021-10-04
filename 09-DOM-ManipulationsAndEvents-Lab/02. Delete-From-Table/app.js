function deleteByEmail() {
    // select input field and read value
    const input = document.querySelector('input[name="email"]');

    // get tbody children
    const rows = Array.from(document.querySelector('tbody').children);
    // const rows = [...document.querySelector('tbody').children];


    let removed = false;
    // repeat foe evety row:
    // - select second cell
    // - if textContent matches input value -> remove row
    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            removed = true;
        }
    }

    // if there is a match print 'Deleted.'
    // otherwise, print 'Not found.'
    if (removed) {
        document.getElementById('result').textContent = 'Deleted.'
    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
}