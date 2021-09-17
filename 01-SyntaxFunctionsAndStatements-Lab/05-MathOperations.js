function operations(n1, n2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '%':
            result = n1 % n2;
            break;
        case '**':
            result = n1 ** n2;
            break;
    }

    console.log(result);
}

operations(5, 6, '+'); // 11
operations(3, 5.5, '*'); // 16.5