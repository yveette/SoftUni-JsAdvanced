function biggest(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        result.push(Math.max(...matrix[i]));
    }
    
    return Math.max(...result);
}

console.log(biggest([[20, 50, 10], 
                    [8, 33, 145]])); 
// 145
console.log(biggest([[3, 5, 7, 12], 
                    [-1, 4, 33, 2], 
                    [8, 3, 0, 4]])); 
// 33