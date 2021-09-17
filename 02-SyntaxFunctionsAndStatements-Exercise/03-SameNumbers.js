function sameNums(num) {
    const strNum = num.toString();
    let result = parseInt(strNum[0]);
    let isSame = true;

    for (let i = 1; i < strNum.length; i++) {
        result += parseInt(strNum[i]); // Number(strNum[i])

        if (strNum[i] != strNum[i - 1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(result);
}

sameNums(2222222);
// true
// 14

sameNums(1234);
// false
// 10