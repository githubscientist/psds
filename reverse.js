// let chars = [];

// function reverse(word) {
//     if (word === '') {
//         return;
//     }

//     reverse(word.slice(1,));
//     chars.push(word[0]);
// }

// let word = 'apple';

// reverse(word);

// console.log(chars.join(''));

// let chars = [];

// function reverse(word) {
//     if (word === '') {
//         return chars.join('');
//     }
//     chars.push(word[word.length - 1]);
//     return reverse(word.slice(0, word.length - 1));
// }

// let word = 'apple';

// console.log(reverse(word));

// function reverse(chars, word) {
//     if (word === '') {
//         return chars.join('');
//     }
//     chars.push(word[word.length - 1]);
//     return reverse(chars, word.slice(0, word.length - 1));
// }

// let word = 'apple';

// console.log(reverse([], word));

// function reverse(chars, word) {
//     if (word === '') {
//         return chars.join('');
//     }
//     return reverse([...chars, word[word.length - 1]], word.slice(0, word.length - 1));
// }

// let word = 'apple';

// console.log(reverse([], word));

// function reverse(word) {
//     if (word === '') {
//         return word;
//     }
//     return word[word.length - 1] + reverse(word.slice(0, word.length - 1));
// }

// let word = 'apple';

// console.log(reverse(word));

// function reverse(word) {
//     if (word === '') return word;
//     return word[word.length - 1] + reverse(word.slice(0, word.length - 1));
// }

// let word = 'apple';

// console.log(reverse(word));

function reverse(word) {
    if (word === '') {
        return;
    }

    reverse(word.slice(1,));
    console.log(word[0]);
}

let word = 'apple';

reverse(word);

/*
    Recursive Tree:

    reverse('apple')
        - word = 'apple'
        - 'apple' == '' x
        - reverse('pple')
            - word = 'pple'
            - 'pple' == '' x
            - reverse('ple')
                - word = 'ple'
                - 'ple' == '' x
                - reverse('le')
                    - word = 'le'
                    - 'le' == '' x
                    - reverse('e')
                        - word = 'e'
                        - 'e' == '' x
                        - reverse('')
                            - word = ''
                            - '' == '' return
                        - console.log(word[0])
                    - console.log(word[0])
                - console.log(word[0])
            - console.log(word[0])
        - console.log(word[0])

    reverse('apple')
*/


/*
    Recursion Tree:

    word = 'apple'
    reverse('apple')
        - print 'a'
        - reverse('pple')
            - print 'p'
            - reverse('ple')
                - print 'p'
                - reverse('le')
                    - print 'l'
                    - reverse('e')
                        - print 'e'
                        - reverse('')
                            - return
*/