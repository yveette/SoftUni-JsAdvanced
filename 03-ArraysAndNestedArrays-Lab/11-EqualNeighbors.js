function equalNeighbours(matrix) {
    let finds = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length - 1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    finds++;
                }
            }
            if (col < matrix[row].length) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    finds++;
                }
            }
        }
    }
    return finds;
}

console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
// [ '5' ] ---> 1

console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));
// [ 'yo', 'done' ] ---> 2
