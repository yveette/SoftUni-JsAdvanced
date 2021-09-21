function printArray(arr, string) {
    console.log(arr.join(string));
}

printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
// One-Two-Three-Four-Five

printArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');
// How about no?_I_will_not_do_it!
