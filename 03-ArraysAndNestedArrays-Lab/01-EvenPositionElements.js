function evenPosition(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]); // or result[result.length] = arr[i]
    }

    console.log(result.join(' '));
}

// or :

function evenPosition(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i] + ' ';
    }

    console.log(result);
}

evenPosition(['20', '30', '40', '50', '60']);
// 20 40 60

evenPosition(['5', '10']);
// 5