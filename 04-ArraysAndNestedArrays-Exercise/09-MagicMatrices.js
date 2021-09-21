function magic(matrix) {
    // A matrix is magical if the sums of the cells of every row and every column are equal.

    for (let i = 0; i < matrix.length - 1; i++) {
        // R = row
        // C = column
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false;
        }
    }

    return true;
}

console.log(magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));
// true

console.log('----------------');

console.log(magic([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));
//false

console.log('----------------');

console.log(magic([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));
// true

