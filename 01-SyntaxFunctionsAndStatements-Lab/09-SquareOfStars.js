function starsSquare(n) {
    n = Number(n);
    if (n == undefined) {
        n = 5;
    }

    let result = '';
        for (let i = 0; i < n; i++) {
            result += '*' + ' ';
        }
        result +=  "\n"
    let final = result.repeat(n);
    console.log(final)
    // console.log(final.split('-').join('\n'));
}

starsSquare(1);
console.log('---------');
starsSquare(2);
console.log('---------');
starsSquare(5);
