function wordsLength(word1, word2, word3) {
    let total = word1.length + word2.length + word3.length;
    let avg = Math.floor(total / 3);

    console.log(total);
    console.log(avg);
}

wordsLength('chocolate', 'ice cream', 'cake');
// 22 
// 7
wordsLength('pasta', '5', '22.3');
// 10
// 3